ReadMe

Getting Started

The final project I created at the Flatiron School in-person software development program in London, this app is a campaign site for Elizabeth Warren, who is running for the Democratic nomination for President in 2020. This site uses React and Ruby on Rails and calls on the Google Civic Information, Maps Javascript, and Geocoding APIs and the ProPublica API, as well as the APIs generated for the users, events, and donations models internal to the Rails back-end. The app uses the official colors of the Warren 2020 campaign and some semantic ui css.   

Demo here: https://www.youtube.com/watch?v=_CMc1fOTbcU

Prerequisites

To launch the app, you will need to run both 

```bundle install``` 

and 

```npm start ```

This project uses bcrypt with a username and one-way hashed encryption using bcrypt

You may need to manually activate gem 'rack-cors' gem 'bcrypt', '~> 3.1.7' and then run bundle install again.

To launch the APIs called as currently written will require that you run: 

```rails s -p 3001```

You will also need to request both ProPublica and Google API keys. 

Built With: 

https://semantic-ui.com - design styling used

http://bg.siteorigin.com/ - create css background files in PNG formatat 

https://www.iloveimg.com - convert PNG to JPG

https://github.com/CookPete/react-player - react player github

https://www.npmjs.com/package/react-twitter-embed - embed tweets

LEGAL INFO 

https://www.fec.gov/resources/cms-content/documents/contribution_limits_chart_2019-2020.pdf 

REACT INFO 

https://www.youtube.com/watch?v=Law7wfdg_ls - react router youtube video 

https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md ScrollToTop

MISC 

https://github.com/sweetalert2/sweetalert2-react-content - alerts

https://guides.rubyonrails.org/active_record_validations.html - validation in Ruby on Rails

http://www.4president.us/ - archive of past presidential websites 

Acknowledgments

My entire cohort in London (class beginning 07/15/2019) and my instructors throughout the program were remarkable coders and human beings and I am very thankful to have been able to work with all of them. 

I additionally referenced the youtube code-alongs of Leigh Halliday and Traversy Media to create the google map. 

https://www.youtube.com/watch?time_continue=172&v=Pf7g32CwX_s - Leigh Halliday

https://www.youtube.com/watch?v=pRiQeo17u6c - Traversy Media
