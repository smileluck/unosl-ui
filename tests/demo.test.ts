import { describe, it, expect } from "vitest"

// 描述一个名称为demo
describe("demo", () => {
    // it是一个上下文函数
    it("shoud pass", () => {
        //期望1=1
        expect(1).toBe(1)
    })
})