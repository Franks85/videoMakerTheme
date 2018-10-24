import React from "react";
import { shallow, mount } from "../setup/test_setup_utils";
import MobileNav from "../../src/components/Navigation/mobileNavigation";

describe("mobile navigation", () => {
  test("renders", () => {
    const wrapper = shallow(<MobileNav />);
    expect(wrapper.exists()).toBe(true);
  });

  test('navList have three child element', () => {
      const wrapper = mount(<MobileNav />);
      expect(wrapper.find('ul').children()).toHaveLength(3);
  })
 
});
