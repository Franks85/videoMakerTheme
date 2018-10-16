import React from "react";
import { shallow } from "../setup/test_setup_utils";
import MobileNav from "../../src/components/Navigation/mobileNavigation";

describe("mobile navigation", () => {
  test("renders", () => {
    const wrapper = shallow(<MobileNav />);
    expect(wrapper.exists()).toBe(true);
  });
});
