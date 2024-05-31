import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            expect(getMonth(new Date("2022-01-01"))).toBe("janvier");
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            expect(getMonth(new Date("2022-07-08"))).toBe("juillet");
        });
    });
})