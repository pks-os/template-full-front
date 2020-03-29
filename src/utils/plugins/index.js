const req = require.context("@/assets/icons/svg", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
import Vue from "vue";
import MySvgIcon from "@/components/SvgIcon";
const SvgIcon = {
  install: Vue => {
    Vue.component("svg-icon", MySvgIcon);
  }
};
Vue.use(SvgIcon);
