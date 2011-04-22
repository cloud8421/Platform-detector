 /*
 * Platform detect 0.1
 * By Claudio Ortolina (claudio@jumpzero.com)
 * github.com/cloud8421
 *
 * Usage is simple:
 *
 *  var platform_data = platform_detector();
 *    
 *    platform_data.pretend //returns the platform name that the browser is
 *      declaring (can be fake)
 *    
 *    platform_data.real //returns the platform name that the script thinks the
 *      browser really is
 *
 * */

function get_vendor() {
    if (navigator.vendor === null || navigator.vendor === undefined) {
      return 'Microsoft'; //this would need to be checked agains all other browsers - community help needed :-)
    } else if (navigator.vendor === '') {
      return 'Mozilla';
    } else {
      return navigator.vendor;
    }
}

function browser_name(vendor, platform) {
  switch(vendor) {
    case 'Apple Computer, Inc.':
      switch(platform) {
        case 'MacIntel':
          return 'Safari';
        case 'iPhone':
          return 'Mobile Safari on iPhone';
        case 'iPad':
          return 'Mobile Safari on iPad';
      }
      break;
    case 'Mozilla':
      return 'Firefox';
    case 'Microsoft':
      return 'Internet Explorer';
    case 'Google Inc.':
      return 'Chrome';
  }
}

function user_agent_to_human(user_agent) {
  switch(true){
    case /iPad/i.test(user_agent):
      return 'Mobile Safari on iPad';
      break;
    case /iPhone/i.test(user_agent):
      return 'Mobile Safari on iPhone';
      break;
    case /Firefox/i.test(user_agent):
      return 'Firefox';
      break;
    case /Chrome.*\bSafari\b/i.test(user_agent):
      return 'Chrome';
      break;
    case /Safari/i.test(user_agent): //need to find the correct regexp for this, as matching works only after previous
      return 'Safari';
      break;
    case /Opera/i.test(user_agent):
      return 'Opera';
      break;
    case /MSIE/i.test(user_agent):
      return 'Internet Explorer';
      break;
  }
}

function platform_detector() {
  if (navigator) {
    var platform = navigator.platform;
    var user_agent = user_agent_to_human(navigator.userAgent);
    var vendor = get_vendor();
    return {
      pretend : user_agent,
      real    : browser_name(vendor, platform)
    }
  }
}
