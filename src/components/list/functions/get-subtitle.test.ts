import { getSubtitle } from "./get-subtitle";

describe("getSubtitle", () => {
  it("returns 'projeto' when quantity is 1", () => {
    expect(getSubtitle(1)).toBe("projeto");
  });

  it("returns 'projetos' when quantity is not 1", () => {
    expect(getSubtitle(2)).toBe("projetos");
    expect(getSubtitle(10)).toBe("projetos");
    expect(getSubtitle(-1)).toBe("projetos");
  });
});
