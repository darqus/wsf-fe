import { describe, expect, it, } from 'vitest'

import { getFixedNumber, } from '../../../src/utils/formatter'

describe('getFixedNumber()', () => {
  it('getFixedNumber()', () => {
    expect(getFixedNumber(0)).toEqual(0)
    expect(getFixedNumber(0.0)).toEqual(0)
    expect(getFixedNumber(-0)).toEqual(-0)
    expect(getFixedNumber(1)).toEqual(1)
    expect(getFixedNumber(1.0)).toEqual(1)
    expect(getFixedNumber(-1.0)).toEqual(-1)
    expect(getFixedNumber(0.1 * 0.2)).toEqual(0.02)
    expect(getFixedNumber(-0.1 * 0.4)).toEqual(-0.04)
    expect(getFixedNumber(-2.10000000000004)).toEqual(-2.1)
    expect(getFixedNumber(-2.19000000000004)).toEqual(-2.19)
    expect(getFixedNumber(-2.19500000000004)).toEqual(-2.2)
    expect(getFixedNumber(-2.19900000000004)).toEqual(-2.2)
  })
})
