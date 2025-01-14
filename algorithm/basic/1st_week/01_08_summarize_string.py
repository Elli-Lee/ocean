def summarize_string(input_str):
    summarized_string=""
    alphabet_occurrence_array = count_alphabet_occurrence(input_str)
    for i in range(len(alphabet_occurrence_array)):
        if alphabet_occurrence_array[i] != 0:
            if summarized_string != "":
                summarized_string += "/"

            char = chr(i + ord('a'))
            summarized_string += char + str(alphabet_occurrence_array[i])
    return summarized_string

def count_alphabet_occurrence(str):
    alphabet_occurrence_array = [0] * 26
    for char in str:
        char_index = ord(char) - ord('a')
        alphabet_occurrence_array[char_index] += 1

    return alphabet_occurrence_array

input_str = "acccdeee"

print(summarize_string(input_str))