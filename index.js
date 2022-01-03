class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/\W+[^,]/g,'');
  }

  static titleize(string) {
    return string.replace(/\b\w/g, l => l.toUpperCase());
  }

}