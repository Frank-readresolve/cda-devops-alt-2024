# Archiving
**Archiving** is a small program in order to discover the basics of "shell scripting". You have to write two scripts in bash, one that downloads some JSON files in order to archive them, and a second one (bonus) in order to clean up the program directory.

## First script
Write a `bash` script named `run.sh` implementing the following specifications.

### Arguments
Arguments from command line, specified by the user, eample: `./run.sh urls.txt downloads archives`
1. The name of the file containing the list of URLs (_e.g._ `urls.txt`)
2. The name of the directory containing the downloaded files (_e.g._`downloads`)
3. The name of the directory containing the archives (_e.g._`archives`)

### Behaviour
- Prints `> Bash script starting at: <DATE>` where `<DATE>` is the current formatted date and time. Example with the expected format: `2024-10-15T14:52:04.295+0200`
- Prints `Script full path: '<PATH_TO_FILE>run.sh'` where `<PATH_TO_FILE>` is the absolute path to the script. The path is not hard coded, it is dynamically retrieved
- (Re)creates a temporary directory in order to store temporary files. You are free to name the directory as you like, be pro, this name is not an argument of the script, it can be hard coded
- Downloads each JSON file (listed in the file containing the list of URLs) keeping track of the HTTP response headers
    - Prints `> Downloading '<URL>'…` where `<URL>` is the current URL being called. The "URL" is displayed in blue and underlined in the terminal
    - Each JSON file is stored in the temporary directory keeping the original file name (_e.g._ `fr.json`)
    - Each HTTP response headers (for each downloaded file) is stored in the temporary directory in a file with a name based on the JSON original file name and the `.headers` suffix (_e.g._ `fr.json.headers`)
    - Prints `  Done` after each processed URL. "Done" is displayed in green in the terminal
- Prints `> Copying JSON files from '<TEMPORARY>' to '<DOWNLOAD>'…` where `<TEMPORARY>` is the name of the temporary directory and `<DOWNLOAD>` is the name of the directory containing the downloaded files provided as second argument
- (Re)creates the directory containing the downloaded files
- Copies the JSON files
- Prints `  Done`. "Done" is displayed in green in the terminal
- Prints `> Concatenating HTTP response headers from '<TEMPORARY>' to '<DOWNLOAD>'…` where `<TEMPORARY>` is the name of the temporary directory and `<DOWNLOAD>` is the name of the directory containing the downloaded files provided as second argument
- Reads each `.headers` file in order to concatenate the content in a single file named `headers.txt`. A line is inserted before each headers in the destinatin file. The inserted line pattern is `### <HEADERS_FILE>:` where `<HEADERS_FILE>` is the name of the headers file (_e.g._ `### fr.json.headers:`)
- Stores the `headers.txt` file in the destination directory
- Prints `  Done`. "Done" is displayed in green in the terminal
- Prints `> Compressing all files in '<DOWNLOAD>' to '<ARCHIVES>'…` where `<DOWNLOAD>` is the name of the directory containing the downloaded files provided as second argument and `<ARCHIVES>` is the name of the directory containing the archives provided as third argument
- Compresses the directory containing all the downloads (JSON files and `headers.txt`) with the maximum compression level available. The generated archive is stored with a dynamic name based on the date and time of the compression and expected format, example: `D2024-10-15T14-52-05.tar.gz`
- Prints `  Done (archive file name: <ARCHIVE_NAME>)` where `<ARCHIVE_NAME>` is the name of the generated archive. "Done" is displayed in green in the terminal
- Prints `Bye!`

### Example of `urls.txt`
```
https://www.readresolve.tech/restcountries/de.json
https://www.readresolve.tech/restcountries/fr.json
https://www.readresolve.tech/restcountries/es.json
```

### Example of `*.json.headers`
```
HTTP/1.1 200 OK
Date: Tue, 15 Oct 2024 15:05:26 GMT
Server: Apache/2.4.52 (Ubuntu)
Last-Modified: Sun, 13 Oct 2024 08:12:41 GMT
ETag: "1578-6245748be4640"
Accept-Ranges: bytes
Content-Length: 5496
Content-Type: application/json
```

### Example of `headers.txt`
```
### es.json.headers:
HTTP/1.1 200 OK
Date: Tue, 15 Oct 2024 15:05:26 GMT
Server: Apache/2.4.52 (Ubuntu)
Last-Modified: Sun, 13 Oct 2024 08:11:44 GMT
ETag: "151d-6245745578c00"
Accept-Ranges: bytes
Content-Length: 5405
Content-Type: application/json

### fr.json.headers:
HTTP/1.1 200 OK
Date: Tue, 15 Oct 2024 15:05:26 GMT
Server: Apache/2.4.52 (Ubuntu)
Last-Modified: Sun, 13 Oct 2024 08:12:41 GMT
ETag: "1578-6245748be4640"
Accept-Ranges: bytes
Content-Length: 5496
Content-Type: application/json
```

### Example of terminal output
```
> Bash script starting at: 2024-10-15T17:08:37.077+0200
> Script full path: '/d/Frank/Documents/READRESOLVE/Formations/Simplon/CDA DevOps Alt2024/code/cda-devops-alt-2024/scripts-sh/001-archiving/run.sh'
> Downloading 'https://www.readresolve.tech/restcountries/de.json'…
  Done
> Downloading 'https://www.readresolve.tech/restcountries/fr.json'…
  Done
> Downloading 'https://www.readresolve.tech/restcountries/es.json'…
  Done
> Copying JSON files from 'tmp' to 'downloads'…
  Done
> Concatenating HTTP response headers from 'tmp' to 'downloads'…
  Done
> Compressing all files in 'downloads' to 'archives'…
  Done (archive file name: D2024-10-15T17-08-37.tar.gz)
> Bash script ending at: 2024-10-15T17:08:37.966+0200
Bye!
```

## Second script
It's a bonus, validate `run.sh` script first :)