import os
from random import randint
from google.cloud import storage




credential_path = "C:\\Users\\brian\\Desktop\\fullstack\\backend\\venustest_key.json"

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

storage_client = storage.Client()

my_bucket = storage_client.get_bucket("venustest-350906.appspot.com")
# vars(my_bucket)



def download_file_from_bucket(blog_name, file_path, bucket_name):
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(blog_name)
    # download_to_filename(destination_file_name)
    s = blob.download_as_text()
    # print(s)
    # print(type(s))
    return s.split('\r\n')
    
    # print(s)
        # storage_client.download_blob_to_file(blob, f)

download_file_from_bucket('excuses.txt', os.path.join(os.getcwd(), "excuses.txt"), my_bucket)

def getMessage():
     message_link = download_file_from_bucket('excuses.txt', os.path.join(os.getcwd(), "excuses.txt"), my_bucket)
     return message_link[randint(0, len(message_link)-1)]



