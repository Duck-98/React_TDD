import { render, screen } from "@testing-library/react";
import SummaryPage from "../index";

test("checkbox and Button", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  expect(checkbox.checked).toEqual(false); // 처음에는 체크박스가 설정이 안되어있어서 false임
  const confirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(confirmButton.disabled).toBeTruthy(); //true로 취급되는 구문을 확인
});
