import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '20s', target: 50 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 200 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/comments');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
