import urllib.request


def get(url):
    request = urllib.request.Request(url)
    with urllib.request.urlopen(request) as response:
        the_page = response.read()
    return the_page


def main():
    url = 'http://api.fixer.io/latest'
    the_page = get(url)
    print(the_page)


if __name__ == '__main__':
    main()
