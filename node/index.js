// AbortController                   AbortSignal                       AggregateError   
// Array                             ArrayBuffer                       Atomics
// BigInt                            BigInt64Array                     BigUint64Array   
// Blob                              Boolean                           BroadcastChannel 
// Buffer                            ByteLengthQueuingStrategy         CompressionStream
// CountQueuingStrategy              Crypto                            CryptoKey        
// CustomEvent                       DOMException                      DataView
// Date                              DecompressionStream               Error
// EvalError                         Event                             EventTarget      
// File                              FinalizationRegistry              Float32Array     
// Float64Array                      FormData                          Function
// Headers                           Infinity                          Int16Array       
// Int32Array                        Int8Array                         Intl
// Iterator                          JSON                              Map
// Math                              MessageChannel                    MessageEvent
// MessagePort                       NaN                               Navigator
// Number                            Object                            Performance
// PerformanceEntry                  PerformanceMark                   PerformanceMeasure
// PerformanceObserver               PerformanceObserverEntryList      PerformanceResourceTiming
// Promise                           Proxy                             RangeError
// ReadableByteStreamController      ReadableStream                    ReadableStreamBYOBReader
// ReadableStreamBYOBRequest         ReadableStreamDefaultController   ReadableStreamDefaultReader
// ReferenceError                    Reflect                           RegExp
// Request                           Response                          Set
// SharedArrayBuffer                 String                            SubtleCrypto
// Symbol                            SyntaxError                       TextDecoder
// TextDecoderStream                 TextEncoder                       TextEncoderStream
// TransformStream                   TransformStreamDefaultController  TypeError
// URIError                          URL                               URLSearchParams
// Uint16Array                       Uint32Array                       Uint8Array
// Uint8ClampedArray                 WeakMap                           WeakRef
// WeakSet                           WebAssembly                       WebSocket
// WritableStream                    WritableStreamDefaultController   WritableStreamDefaultWriter
// _                                 _error                            assert
// async_hooks                       atob                              btoa
// buffer                            child_process                     clearImmediate
// clearInterval                     clearTimeout                      cluster
// console                           constants                         crypto
// decodeURI                         decodeURIComponent                dgram
// diagnostics_channel               dns                               domain
// encodeURI                         encodeURIComponent                escape
// eval                              events                            fetch
// fs                                global                            globalThis
// http                              http2                             https
// inspector                         isFinite                          isNaN
// module                            navigator                         net
// os                                parseFloat                        parseInt
// path                              perf_hooks                        performance
// process                           punycode                          querystring
// queueMicrotask                    readline                          repl
// require                           setImmediate                      setInterval
// setTimeout                        stream                            string_decoder
// structuredClone                   sys                               timers
// tls                               trace_events                      tty
// undefined                         unescape                          url
// util                              v8                                vm
// wasi                              worker_threads                    zlib

// __proto__                         hasOwnProperty                    isPrototypeOf
// propertyIsEnumerable              toLocaleString                    toString
// valueOf

// constructor




// fs file system module
// {
//   appendFile: [Function: appendFile],
//   appendFileSync: [Function: appendFileSync],
//   access: [Function: access],
//   accessSync: [Function: accessSync],
//   chown: [Function: chown],
//   chownSync: [Function: chownSync],
//   chmod: [Function: chmod],
//   chmodSync: [Function: chmodSync],
//   close: [Function: close],
//   closeSync: [Function: closeSync],
//   copyFile: [Function: copyFile],
//   copyFileSync: [Function: copyFileSync],
//   cp: [Function: cp],
//   cpSync: [Function: cpSync],
//   createReadStream: [Function: createReadStream],
//   createWriteStream: [Function: createWriteStream],
//   exists: [Function: exists],
//   existsSync: [Function: existsSync],
//   fchown: [Function: fchown],
//   fchownSync: [Function: fchownSync],
//   fchmod: [Function: fchmod],
//   fchmodSync: [Function: fchmodSync],
//   fdatasync: [Function: fdatasync],
//   fdatasyncSync: [Function: fdatasyncSync],
//   fstat: [Function: fstat],
//   fstatSync: [Function: fstatSync],
//   fsync: [Function: fsync],
//   fsyncSync: [Function: fsyncSync],
//   ftruncate: [Function: ftruncate],
//   ftruncateSync: [Function: ftruncateSync],
//   futimes: [Function: futimes],
//   futimesSync: [Function: futimesSync],
//   glob: [Function: glob],
//   globSync: [Function: globSync],
//   lchown: [Function: lchown],
//   lchownSync: [Function: lchownSync],
//   lchmod: undefined,
//   lchmodSync: undefined,
//   link: [Function: link],
//   linkSync: [Function: linkSync],
//   lstat: [Function: lstat],
//   lstatSync: [Function: lstatSync],
//   lutimes: [Function: lutimes],
//   lutimesSync: [Function: lutimesSync],
//   mkdir: [Function: mkdir],
//   mkdirSync: [Function: mkdirSync],
//   mkdtemp: [Function: mkdtemp],
//   mkdtempSync: [Function: mkdtempSync],
//   open: [Function: open],
//   openSync: [Function: openSync],
//   openAsBlob: [Function: openAsBlob],
//   readdir: [Function: readdir],
//   readdirSync: [Function: readdirSync],
//   read: [Function: read],
//   readSync: [Function: readSync],
//   readv: [Function: readv],
//   readvSync: [Function: readvSync],
//   readFile: [Function: readFile],
//   readFileSync: [Function: readFileSync],
//   readlink: [Function: readlink],
//   readlinkSync: [Function: readlinkSync],
//   realpath: [Function: realpath] { native: [Function (anonymous)] },
//   realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
//   rename: [Function: rename],
//   renameSync: [Function: renameSync],
//   rm: [Function: rm],
//   rmSync: [Function: rmSync],
//   rmdir: [Function: rmdir],
//   rmdirSync: [Function: rmdirSync],
//   stat: [Function: stat],
//   statfs: [Function: statfs],
//   statSync: [Function: statSync],
//   statfsSync: [Function: statfsSync],
//   symlink: [Function: symlink],
//   symlinkSync: [Function: symlinkSync],
//   truncate: [Function: truncate],
//   truncateSync: [Function: truncateSync],
//   unwatchFile: [Function: unwatchFile],
//   unlink: [Function: unlink],
//   unlinkSync: [Function: unlinkSync],
//   utimes: [Function: utimes],
//   utimesSync: [Function: utimesSync],
//   watch: [Function: watch],
//   watchFile: [Function: watchFile],
//   writeFile: [Function: writeFile],
//   writeFileSync: [Function: writeFileSync],
//   write: [Function: write],
//   writeSync: [Function: writeSync],
//   writev: [Function: writev],
//   writevSync: [Function: writevSync],
//   Dirent: [class Dirent],
//   Stats: [Function: deprecated],
//   ReadStream: [Getter/Setter],
//   WriteStream: [Getter/Setter],
//   FileReadStream: [Getter/Setter],
//   FileWriteStream: [Getter/Setter],
//   _toUnixTimestamp: [Function: toUnixTimestamp],
//   Dir: [Getter/Setter],
//   opendir: [Getter/Setter],
//   opendirSync: [Getter/Setter],
//   F_OK: 0,
//   R_OK: 4,
//   W_OK: 2,
//   X_OK: 1,
//   constants: [Object: null prototype] {
//     UV_FS_SYMLINK_DIR: 1,
//     UV_FS_SYMLINK_JUNCTION: 2,
//     O_RDONLY: 0,
//     O_WRONLY: 1,
//     O_RDWR: 2,
//     UV_DIRENT_UNKNOWN: 0,
//     UV_DIRENT_FILE: 1,
//     UV_DIRENT_DIR: 2,
//     UV_DIRENT_LINK: 3,
//     UV_DIRENT_FIFO: 4,
//     UV_DIRENT_SOCKET: 5,
//     UV_DIRENT_CHAR: 6,
//     UV_DIRENT_BLOCK: 7,
//     EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
//     EXTENSIONLESS_FORMAT_WASM: 1,
//     S_IFMT: 61440,
//     S_IFREG: 32768,
//     S_IFDIR: 16384,
//     S_IFCHR: 8192,
//     S_IFIFO: 4096,
//     S_IFLNK: 40960,
//     O_CREAT: 256,
//     O_EXCL: 1024,
//     UV_FS_O_FILEMAP: 536870912,
//     O_TRUNC: 512,
//     O_APPEND: 8,
//     S_IRUSR: 256,
//     S_IWUSR: 128,
//     F_OK: 0,
//     R_OK: 4,
//     W_OK: 2,
//     X_OK: 1,
//     UV_FS_COPYFILE_EXCL: 1,
//     COPYFILE_EXCL: 1,
//     UV_FS_COPYFILE_FICLONE: 2,
//     COPYFILE_FICLONE: 2,
//     UV_FS_COPYFILE_FICLONE_FORCE: 4,
//     COPYFILE_FICLONE_FORCE: 4
//   },
//   promises: [Getter]
// }

// http module
// {
//   _connectionListener: [Function: connectionListener],
//   METHODS: [
//     'ACL',        'BIND',        'CHECKOUT',
//     'CONNECT',    'COPY',        'DELETE',
//     'GET',        'HEAD',        'LINK',
//     'LOCK',       'M-SEARCH',    'MERGE',
//     'MKACTIVITY', 'MKCALENDAR',  'MKCOL',
//     'MOVE',       'NOTIFY',      'OPTIONS',
//     'PATCH',      'POST',        'PROPFIND',
//     'PROPPATCH',  'PURGE',       'PUT',
//     'QUERY',      'REBIND',      'REPORT',
//     'SEARCH',     'SOURCE',      'SUBSCRIBE',
//     'TRACE',      'UNBIND',      'UNLINK',
//     'UNLOCK',     'UNSUBSCRIBE'
//   ],
//   STATUS_CODES: {
//     '100': 'Continue',
//     '101': 'Switching Protocols',
//     '102': 'Processing',
//     '103': 'Early Hints',
//     '200': 'OK',
//     '201': 'Created',
//     '202': 'Accepted',
//     '203': 'Non-Authoritative Information',
//     '204': 'No Content',
//     '205': 'Reset Content',
//     '206': 'Partial Content',
//     '207': 'Multi-Status',
//     '208': 'Already Reported',
//     '226': 'IM Used',
//     '300': 'Multiple Choices',
//     '301': 'Moved Permanently',
//     '302': 'Found',
//     '303': 'See Other',
//     '304': 'Not Modified',
//     '305': 'Use Proxy',
//     '307': 'Temporary Redirect',
//     '308': 'Permanent Redirect',
//     '400': 'Bad Request',
//     '401': 'Unauthorized',
//     '402': 'Payment Required',
//     '403': 'Forbidden',
//     '404': 'Not Found',
//     '405': 'Method Not Allowed',
//     '406': 'Not Acceptable',
//     '407': 'Proxy Authentication Required',
//     '408': 'Request Timeout',
//     '409': 'Conflict',
//     '410': 'Gone',
//     '411': 'Length Required',
//     '412': 'Precondition Failed',
//     '413': 'Payload Too Large',
//     '414': 'URI Too Long',
//     '415': 'Unsupported Media Type',
//     '416': 'Range Not Satisfiable',
//     '417': 'Expectation Failed',
//     '418': "I'm a Teapot",
//     '421': 'Misdirected Request',
//     '422': 'Unprocessable Entity',
//     '423': 'Locked',
//     '424': 'Failed Dependency',
//     '425': 'Too Early',
//     '426': 'Upgrade Required',
//     '428': 'Precondition Required',
//     '429': 'Too Many Requests',
//     '431': 'Request Header Fields Too Large',
//     '451': 'Unavailable For Legal Reasons',
//     '500': 'Internal Server Error',
//     '501': 'Not Implemented',
//     '502': 'Bad Gateway',
//     '503': 'Service Unavailable',
//     '504': 'Gateway Timeout',
//     '505': 'HTTP Version Not Supported',
//     '506': 'Variant Also Negotiates',
//     '507': 'Insufficient Storage',
//     '508': 'Loop Detected',
//     '509': 'Bandwidth Limit Exceeded',
//     '510': 'Not Extended',
//     '511': 'Network Authentication Required'
//   },
//   Agent: [Function: Agent] { defaultMaxSockets: Infinity },
//   ClientRequest: [Function: ClientRequest],
//   IncomingMessage: [Function: IncomingMessage],
//   OutgoingMessage: [Function: OutgoingMessage],
//   Server: [Function: Server],
//   ServerResponse: [Function: ServerResponse],
//   createServer: [Function: createServer],
//   validateHeaderName: [Function: wrappedFn] { withoutStackTrace: [Function (anonymous)] },
//   validateHeaderValue: [Function: wrappedFn] { withoutStackTrace: [Function (anonymous)] },
//   get: [Function: get],
//   request: [Function: request],
//   setMaxIdleHTTPParsers: [Function: setMaxIdleHTTPParsers],
//   maxHeaderSize: [Getter],
//   globalAgent: [Getter/Setter],
//   WebSocket: [Getter],
//   CloseEvent: [Getter],
//   MessageEvent: [Getter]
// }

