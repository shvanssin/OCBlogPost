import { NegPipe } from './neg.pipe';

describe('NegPipe', () => {
  it('create an instance', () => {
    const pipe = new NegPipe();
    expect(pipe).toBeTruthy();
  });
});
