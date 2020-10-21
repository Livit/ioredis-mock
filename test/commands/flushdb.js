import MockRedis from '../../src';

describe('flushdb', () => {
  const redis = new MockRedis({
    data: {
      deleteme: 'please',
      metoo: 'pretty please',
    },
  });
  it('should empty current db', () =>
    redis
      .flushdb()
      .then((status) => expect(status).toBe('OK'))
      .then(() => expect(redis.data.keys().length).toBe(0)));
  it.skip('should empty other db after SELECT', () => {});
});
