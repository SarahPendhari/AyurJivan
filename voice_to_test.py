import speech_recognition as sr

# Initialize the recognizer
recognizer = sr.Recognizer()

# Function to record audio for a specified duration and convert it to text
def record_and_convert(duration_seconds):
    with sr.Microphone() as source:
        print(f"Recording for {duration_seconds} seconds...")

        # Record audio for the specified duration
        audio = recognizer.listen(source, timeout=duration_seconds)

    try:
        # Use the Google Web Speech API to convert audio to text
        text = recognizer.recognize_google(audio)
        print("You said:", text)
        return text
    except sr.UnknownValueError:
        print("Could not understand audio")
        return ""
    except sr.RequestError as e:
        print("Could not request results; {0}".format(e))
        return ""

# Function to calculate the length of words in the transcribed text
def calculate_word_lengths(text):
    words = text.split()
    word_lengths = len(words)
    return word_lengths

if __name__ == "__main__":
    # Specify the duration for recording in seconds (e.g., 15 seconds)
    recording_duration = 15
    transcribed_text = record_and_convert(recording_duration)

    if transcribed_text:
        word_lengths = calculate_word_lengths(transcribed_text)
        print("Word lengths:", word_lengths)
    else:
        print("No text transcribed.")

    total_words=word_lengths*4
    if total_words<110 :
        print("slow")
    elif (total_words >110 and  total_words< 160):
        print("medium")
    elif(total_words>160):
        print("fast")