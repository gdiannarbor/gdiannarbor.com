meetup gator calendar
=====================

## Dev Install Steps

1. Install `pip` [Instructions](http://pip.readthedocs.org/en/latest/installing.html)
1. Run `pip install virtualenv`
1. Create and source a `virtualenv` [Instructions](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
1. Install Google App Engine SDK for Python [Instructions](https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python)
1. Install module dependencies
** `pip install webapp2`
** `pip install django`
1. Run the development server `dev_appserver.py path/to/calendar_dir`
** If you are running a version of Python older than 1.7, use `old_dev_appserver.py path/to/calendar_dir`
