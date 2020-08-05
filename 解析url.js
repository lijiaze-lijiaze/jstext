const result = parse('https://abc.example.com:8080/a/b/c?q=234&p=abc#header');
function parse(url) {
    const result = {};

    const scheme = url.indexOf('https');
    result.scheme = scheme >= 0 ? 'https' : 'http';

    const hostReg = /[^http|\/][0-9a-zA-Z][^\:|\/]+/;
    const hostMatchs = url.match(hostReg);
    console.log(hostMatchs)
    result.host = hostMatchs && hostMatchs[0] || '';

    const indexOfHash = url.indexOf('#');
    const hash = indexOfHash >= 0 ? url.split('#')[1] : '';
    result.hash = hash;

    const pathReg = /[^\/|\:]\/[^#]+\//;

    const pathMatches = url.match(pathReg);

    result.path = pathMatches && ('/' + pathMatches[0]) || '';

    const portReg = /\:[0-9]+/;
    const portMatches = url.match(portReg);

    result.port = portMatches && portMatches[0].replace(/\:/, '') || '';

    const queryReg = /\?.+\#/;
    const queryMatches = url.match(queryReg);
    result.query = queryMatches && queryMatches[0].replace(/[\?\#]/g, '') || '';

    const queries = {};
    result.query = result.query.split('&');
    for (let item of result.query) {
        item = item.split('=');
        queries[item[0]] = item[1];
    }

    result.queries = queries;
    delete result.query;
console.log(result)
    return result;
}

parse(result)