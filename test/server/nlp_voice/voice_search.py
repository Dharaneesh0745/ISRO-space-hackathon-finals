import spacy
import speech_recognition as sr

nlp = spacy.load("en_core_web_sm")

def process_voice_command(command):
    try:
        doc = nlp(command)
    except Exception as e:
        print(f"Error processing the text: {e}")
        return None, None, None

    location = []
    time_period = []
    data_types = []

    try:
        detected_entities = [(ent.text, ent.label_) for ent in doc.ents]
        # print(f"Detected Entities: {detected_entities}")
        # print(doc)
        for ent in doc.ents:
            # print(ent.label_)
            if ent.label_ == "ORG" or ent.label_ == "LOC":
                location.append(ent.text)
            elif ent.label_ == "DATE":
                time_period.append(token.text for token in ent if token.like_num)

        #print(f"lemma : {lemmatized_words}")
        # Identify relevant nouns based on POS and lemmatization
        relevant_nouns = [token.lemma_.text.lower() for token in doc if token.pos_ == "NOUN" and token.lemma_ not in ["-PRON-"]]

        data_types.extend(relevant_nouns)

    except Exception as e:
        print(f"Error extracting information: {e}")
        return None, None, None

    return location, time_period, data_types

def voice_recognition():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Say something...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

        try:
            command = recognizer.recognize_google(audio)
            print(f"You said: {command}")
            return command
        except sr.UnknownValueError:
            print("Sorry, could not understand the audio.")
            return None
        except sr.RequestError as e:
            print(f"Error connecting to Google Speech Recognition service: {e}")
            return None

voice_command = input("Enter Query : ")

location, time_period, data_type = process_voice_command(voice_command)

if location is not None:
    print(f"Location: {location}")
if time_period is not None:
    print(f"Time Period: {time_period}")
if data_type is not None:
    print(f"Data Type: {data_type}")
