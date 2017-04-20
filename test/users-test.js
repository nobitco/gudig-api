'use strict'

import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise'
import users from '../users'

test('GET /:id', async t => {
  let id = '99887651212'

  let srv = micro(users)

  let url = await listen(srv)
  let body = await request({ uri: `${url}/${id}`, json: true })

  t.deepEqual(body, { id })
})

test.todo('POST /')
