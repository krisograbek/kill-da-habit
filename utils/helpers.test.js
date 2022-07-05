import { calculateProgress } from "./helpers";


describe("Calculate progress", () => {
  describe("Handle edge cases", () => {
    it("returns 0 when collected is less than 0", () => {
      const progress = calculateProgress(-1, 10);
      expect(progress).toEqual(0);
    });
    it("returns 0 when goal is less than 0", () => {
      const progress = calculateProgress(1, -10);
      expect(progress).toEqual(0);
    });
    it("returns 1 when collected is more than goal", () => {
      const progress = calculateProgress(2, 1);
      expect(progress).toEqual(1);
    });
  });
  it("returns the ratio of given numbers in range 0 - 1", () => {
    expect(calculateProgress(1, 2)).toEqual(0.5);
    expect(calculateProgress(0.1, 2)).toEqual(0.05);
    expect(calculateProgress(5, 8)).toEqual(0.625);
    expect(calculateProgress(5, 9)).toBeCloseTo(0.5555, 3);
  });
});