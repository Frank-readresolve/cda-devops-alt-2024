# Archiving
**Archiving** is a small program (_aka_ input, processing, output) in order to discover the basics of "shell scripting".

Write a script that retrieves JSON documents from a web server based on a list of URLs. For monitoring purposes, keep the HTTP headers of each response in a separate file. Keep a history of the last script executions.

## First step
Write a `bash` script named `run.sh` implementing the following specifications.

### Arguments
Arguments from command line, specified by the user, example: `./run.sh urls.txt downloads archives`
1. The name of the file containing the list of URLs (_e.g._ provided `urls.txt`)
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
- Prints `> Compiling HTTP response headers from '<TEMPORARY>' to '<DOWNLOAD>'…` where `<TEMPORARY>` is the name of the temporary directory and `<DOWNLOAD>` is the name of the directory containing the downloaded files provided as second argument
- Reads each `.headers` file in order to compile (group) the content in a single file named `headers.txt`. A line is inserted before each headers in the destinatin file. The inserted line pattern is `### <HEADERS_FILE>:` where `<HEADERS_FILE>` is the name of the headers file (_e.g._ `### fr.json.headers:`)
- Stores the `headers.txt` file in the destination directory
- Prints `  Done`. "Done" is displayed in green in the terminal
- Prints `> Compressing all files in '<DOWNLOAD>' to '<ARCHIVES>'…` where `<DOWNLOAD>` is the name of the directory containing the downloaded files provided as second argument and `<ARCHIVES>` is the name of the directory containing the archives provided as third argument
- Compresses the directory containing all the downloads (JSON files and `headers.txt`) with the maximum compression level available. The generated archive is stored with a dynamic name based on the date and time of the compression and expected format, example: `D2024-10-15T14-52-05.tar.gz`
- Prints `  Done (archive file name: <ARCHIVE_NAME>)` where `<ARCHIVE_NAME>` is the name of the generated archive. "Done" is displayed in green in the terminal
- Prints `> Bash script ending at: <DATE>` where `<DATE>` is the current formatted date and time. Example with the expected format: `2024-10-15T17:08:37.966+0200`
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
> Compiling HTTP response headers from 'tmp' to 'downloads'…
  Done
> Compressing all files in 'downloads' to 'archives'…
  Done (archive file name: D2024-10-15T17-08-37.tar.gz)
> Bash script ending at: 2024-10-15T17:08:37.966+0200
Bye!
```

## Second step (bonus)
Finish `run.sh` script first.

The second step is a new script which performs a cleanup in the project's directory. Its name is `clean.sh`.

### Arguments
1. One argument to specify the "downloads" directory
2. One argument to specify the "archives" directory
3. One argument to specify the "temporary" directory

### Behaviour
- The output must be the same as the example below apart from dates and directory names which can vary of course
- Removing a directory means deleting the directory and all its content
- Emptying a directory means the directory is not deleted, only its content
- Business rule regarding the deletion of the "old archives": our need is to keep only the two most recent compressed files. So if we have three or more archives in the directory, there should be only two remaining after the script execution, the two most recent. We can execute the script with no issue even if the directory contains only one or two  compressed files, but in this case no archive is deleted
- The new `clean.sh` script do not have any side effect on the first `run.sh`, but it is expected that the new script can be executed with success if and only if the first one was executed ate least once

### Example of terminal output
```
> Bash script starting at: 2024-10-17T11:46:33.208+0200
> Script full path: '/d/Frank/Documents/READRESOLVE/Formations/Simplon/CDA DevOps Alt2024/code/cda-devops-alt-2024/scripts-sh/001-archiving/clean.sh'
> Removing download directory 'downloads'…
  Done
> Deleting old archives from 'archives'…
  Done
> Emptying temporary directory 'tmp'…
  Done
> Bash script ending at: 2024-10-17T11:46:33.862+0200
Bye!
```

## Third step (bonus)
Finish `clean.sh` script first.

The third step involves modifying both `run.sh` and `clean.sh` scripts.

### Arguments
Each script accepts an "option" which can be specified in either short (`-h`) or long form (`--help`).

### Behaviour
- The two scripts must accept the modification of their behaviour if the "option" is the unique argument
- If the "option" is specified but is not the unique argument then the script ends after printing `Bad arguments. Try '<SCRIPT_NAME> -h' or '<SCRIPT_NAME> --help' for more information.` where `<SCRIPT_NAME>` is the name of the current running script. The script logic is not executed.
- If the "option" is the unique argument then the script displays a traditional shell-like help text to the user and the script logic is not executed
- The help text is in english and obeys the formatting of shell-like help text
- The help text explains how to use the related script

### Example of terminal output
No examples.
