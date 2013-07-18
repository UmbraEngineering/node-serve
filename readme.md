# serve

A command line tool for easily spawning static file servers

## Install

```bash
$ npm install -g node-serve
```

## Basic Usage

Just run the command `serve` from the directory you want to serve files from.

## Advanced Options

### --addr [addr]

The address to listen to (default is "0.0.0.0").

### --port [port]

The port to listen to (default is 8080).

### --path [path]

The path to serve files from (default is "." or the current working directory).

### --cache [cache]

The duration of the file cache (defualt is 0). Can support a number of milliseconds, or a more complex time string, eg.

* "5 minutes"
* "0.5 hr"
* "2/3 day"

