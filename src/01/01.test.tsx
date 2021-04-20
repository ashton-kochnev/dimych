import {sum} from './01'
import {mult} from './01'
import {splitIntoWord} from './01'

let a: number;
let b: number;
let c: number;

beforeEach( () => {
     a = 1;
     b = 2;
     c = 3;
})

test('sum should be correct', () => {

    const result1 = sum(a, b);
    const result2 = sum(c, b);

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multiplay should be correct', () => {

    const result1 = mult(a, b);
    const result2 = mult(c, b);

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct', () => {
    const a = 'hello my friend';
    const b = "what's up, man! what your name?";

    const res1 = splitIntoWord(a);
    const res2 = splitIntoWord(b);

    expect(res1.length).toBe(3);
    expect(res1[0]).toBe('hello')
    expect(res1[1]).toBe('my')
    expect(res1[2]).toBe('friend')

    expect(res2.length).toBe(6);
    expect(res2[0]).toBe('what\'s')
    expect(res2[1]).toBe('up')
    expect(res2[2]).toBe('man')
    expect(res2[3]).toBe('what')
    expect(res2[4]).toBe('your')
    expect(res2[5]).toBe('name')
})