import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
  const buffers = []

  // fazendo um for no req.body que eu estou mandando a cada requisicao que o servidor aguente
  // depois puxando par ao chunk
  // logo em seguida
  // pegando aos poucos a informacao
  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)
})

// req => ReadableStream
// res => WritableStream
const serverToStreamNotFinalized = http.createServer(async (req, res) => {
  const buffers = []
  return req
    .pipe(InverseNumberStream())
    .pipe(res);
})

server.listen(3334);
