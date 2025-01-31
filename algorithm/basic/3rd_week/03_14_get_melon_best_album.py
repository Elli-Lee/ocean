# 시간복잡도 O(NlogN) 이어서 나쁘진 않지만 구리다...
# 내가 풀었지만 구리다고 생각했는데 이게 답이었다...
def get_melon_best_album(genre_array, play_array):
  result = []

  count_dict = {} # 장르별 총 재생횟수를 담음
  data_dict = {}

  # 일단 딕셔너리를 만들자.
  for i in range(len(genre_array)):
    if genre_array[i] not in count_dict:
      count_dict[genre_array[i]] = play_array[i]
      data_dict[genre_array[i]] = [[i, play_array[i]]]
    else:
      count_dict[genre_array[i]] += play_array[i]
      data_dict[genre_array[i]].append([i, play_array[i]])

  sorted_count_dict = sorted(count_dict.items(), key=lambda x: x[1], reverse=True)
  
  for (genre, total) in sorted_count_dict:
    index_count_data = data_dict[genre]
    sorted_index_count_data = sorted(index_count_data, key = lambda x: x[1], reverse=True)
    for i in range(2):
      if i < len(data_dict[genre]):
        result.append(sorted_index_count_data[i][0])

  return result


# 특정 키 값에 대해서 value를 모아서 합쳐주고 싶다 and 특정 키 값은 아직 정해지지 않았다
# => 딕셔너리

def get_melon_best_album_solution(genre_array, play_array):
  n = len(genre_array)
  genre_total_play_dict = {}
  genre_index_play_array_dict = {}

  for i in range(n):
    genre = genre_array[i] # classic
    play = play_array[i] # 500
    if genre in genre_total_play_dict:
      genre_total_play_dict[genre] += play
      genre_index_play_array_dict[genre].append([i, play])
    else:
      genre_total_play_dict[genre] = play
      genre_index_play_array_dict[genre] = [[i, play]]

  sorted_genre_play_array = sorted(genre_total_play_dict.items(), key=lambda item: item[1], reverse=True)
  
  result = []

  for genre, total_play in sorted_genre_play_array:
    sorted_genre_index_play_array = sorted(genre_index_play_array_dict[genre], key=lambda item: item[1], reverse=True)
    genre_song_count = 0
    for index, play in sorted_genre_index_play_array:
      if genre_song_count >= 2:
        break
      result.append(index)
      genre_song_count += 1
  return result

print("정답 = [4, 1, 3, 0] / 현재 풀이 값 = ", get_melon_best_album_solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))
print("정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ", get_melon_best_album_solution(["hiphop", "classic", "pop", "classic", "classic", "pop", "hiphop"], [2000, 500, 600, 150, 800, 2500, 2000]))