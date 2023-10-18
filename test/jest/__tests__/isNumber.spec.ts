import { describe, expect, it, } from 'vitest'

import { isNumber, } from './demo/isNumber'

describe('isNumber()', () => {
  it('isNumber()', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(0.0)).toBe(true)
    expect(isNumber(-0)).toBe(true)
    expect(isNumber(1)).toBe(true)
    expect(isNumber(1.0)).toBe(true)
    expect(isNumber(-1.0)).toBe(true)
    expect(isNumber(0.1 * 0.2)).toBe(true)
    expect(isNumber(-0.1 * 0.4)).toBe(true)
    expect(isNumber(NaN)).toBe(false)
    // expect(isNumber('0')).toBe(true)
    // expect(isNumber(undefined)).toBe(false)
    // expect(isNumber('undefined')).toBe(false)
    // expect(isNumber(null)).toBe(false)
    // expect(isNumber('null')).toBe(false)
    // expect(isNumber(true)).toBe(false)
    // expect(isNumber(false)).toBe(false)
  })
})
