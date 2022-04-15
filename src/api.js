const version = "1.14.0.0";
const hostURL = window.location.hostname.split(".");
let domainPath = "";

hostURL.forEach((e, index) => {
  if (index > 0) {
    domainPath += "." + e;
  }
});

const webSite = window.location.origin.includes("dev")
  ? window.location.protocol + "//www.dev.hannlync.com"
  : window.location.protocol + "//www.hannlync.com";

const myportal = window.location.origin.includes("dev")
  ? window.location.protocol + "//myportal.dev.hannlync.com"
  : window.location.protocol + "//myportal.hannlync.com";

const contents_url = window.location.origin.includes("dev")
  ? window.location.protocol + "//contents.dev.hannlync.com"
  : window.location.protocol + "//contents.hannlync.com";
const epg_url = window.location.origin.includes("dev")
  ? window.location.protocol + "//epg.dev.hannlync.com"
  : window.location.protocol + "//epg.hannlync.com";

export { version, epg_url, contents_url, webSite, myportal };
