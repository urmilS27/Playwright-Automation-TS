# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> complete flow from homepage to show detail with all assertions
- Location: tests/demo.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('[data-testid="hero-rating-bar__aggregate-rating__score"] ~ div').first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-testid="hero-rating-bar__aggregate-rating__score"] ~ div').first()
    10 × locator resolved to <div class="sc-a30a09c4-5 cHCWn"></div>
       - unexpected value "hidden"

```

```yaml
- navigation:
  - link "Home":
    - /url: /?ref_=tt_nv_home
    - img
  - text: Menu
  - search:
    - text: All
    - combobox:
      - textbox "Search IMDb"
      - listbox
    - status: 8 suggestions available
    - button "Submit search"
  - link "Go To IMDb Pro":
    - /url: https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm
    - img
  - link "Watchlist":
    - /url: /list/watchlist/?ref_=tt_nv_urwls_all
  - link "Sign in":
    - /url: /registration/signin/?u=%2Ftitle%2Ftt1190634%2F&ref_=tt_nv_generic_lgin
  - text: EN
  - status
- status
- main:
  - iframe
  - link "View episode guide":
    - /url: /title/tt1190634/episodes/?ref_=tt_ov_epl
    - text: Episode guide 40
  - link "Cast & crew":
    - /url: /title/tt1190634/fullcredits/?ref_=tt_ov_ql_1
  - link "User reviews":
    - /url: /title/tt1190634/reviews/?ref_=tt_ov_ql_2
  - link "Trivia":
    - /url: /title/tt1190634/trivia/?ref_=tt_ov_ql_3
  - link "FAQ":
    - /url: /title/tt1190634/faq/?ref_=tt_ov_ql_4
  - link "IMDbPro":
    - /url: https://pro.imdb.com/title/tt1190634/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
  - button "View all topics": All topics
  - button "Share on social media"
  - heading "The Boys" [level=1]
  - text: TV Series
  - link "2019–2026":
    - /url: /title/tt1190634/releaseinfo/?ref_=tt_ov_rdat
  - link "TV-MA":
    - /url: /title/tt1190634/parentalguide/?ref_=tt_ov_pg#certificates
  - text: 1h IMDb RATING
  - link "View User Ratings":
    - /url: /title/tt1190634/ratings/?ref_=tt_ov_rat
    - text: 8.5 /10 985K
  - text: YOUR RATING
  - button "Rate The Boys": Rate
  - text: POPULARITY
  - link "View Popular TV Shows":
    - /url: /chart/tvmeter/?ref_=tt_ov_pop
    - text: 4 3
  - group:
    - img "Jensen Ackles, Antony Starr, Nathan Mitchell, Chace Crawford, Valorie Curry, Colby Minifie, Susan Heyward, and Daveed Diggs in The Boys (2019)"
    - button "Add to Watchlist"
    - link "View ’The Boys’ Poster":
      - /url: /title/tt1190634/mediaviewer/rm3465663234/?ref_=tt_ov_i
  - button "Video Autoplay Preference"
  - group:
    - img "The cast of \"The Boys\" reflect on their favorite moments from the show as their storylines come to an end with the fifth and final season. Stars Erin Moriarty, Antony Starr, Jessie T. Usher, Karl Urban, Jack Quaid, Karen Fukuhara, Laz Alonso, Jensen Ackles, Colby Minifie, Susan Heyward, Valorie Curry, Nathan Mitchell, and creator Eric Kripke discuss the on-set memories from previous seasons that still make them laugh."
    - text: Play clip6:50 Watch "The Boys" Share Their Favorite Moments From the Show
    - img "289 people liked this video"
    - img "There are 211 reactions to this video from other people, primarily Love it and Appreciate emojis"
  - link "99+ Videos":
    - /url: /title/tt1190634/videogallery/?ref_=tt_ov_vi_sm
  - link "99+ Photos":
    - /url: /title/tt1190634/mediaviewer/rm1431161346/?ref_=tt_ov_m_sm
  - link "Dark Comedy":
    - /url: /interest/in0000035/?ref_=tt_ov_in_1
  - link "Psychological Drama":
    - /url: /interest/in0000086/?ref_=tt_ov_in_2
  - link "Raunchy Comedy":
    - /url: /interest/in0000041/?ref_=tt_ov_in_3
  - link "Satire":
    - /url: /interest/in0000042/?ref_=tt_ov_in_4
  - link "Slapstick":
    - /url: /interest/in0000046/?ref_=tt_ov_in_5
  - link "Superhero":
    - /url: /interest/in0000008/?ref_=tt_ov_in_6
  - link "Action":
    - /url: /interest/in0000001/?ref_=tt_ov_in_7
  - link "Comedy":
    - /url: /interest/in0000034/?ref_=tt_ov_in_8
  - link "Crime":
    - /url: /interest/in0000052/?ref_=tt_ov_in_9
  - link "Drama":
    - /url: /interest/in0000076/?ref_=tt_ov_in_10
  - paragraph: A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.
  - text: Creator
  - link "Eric Kripke":
    - /url: /name/nm0471392/?ref_=tt_ov_1_1
  - link "See full cast and crew":
    - /url: /title/tt1190634/fullcredits/?ref_=tt_ov_sm_2#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
    - text: Stars
  - link "Karl Urban":
    - /url: /name/nm0881631/?ref_=tt_ov_2_1
  - link "Jack Quaid":
    - /url: /name/nm4425051/?ref_=tt_ov_2_2
  - link "Antony Starr":
    - /url: /name/nm1102278/?ref_=tt_ov_2_3
  - link "See full cast and crew":
    - /url: /title/tt1190634/fullcredits/?ref_=tt_ov_sm_2#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
  - link "Go to IMDbPro":
    - /url: https://pro.imdb.com/title/tt1190634/?rf=cons_tt_atf&ref_=cons_tt_atf
    - img
  - link "See production info at IMDbPro":
    - /url: https://pro.imdb.com/title/tt1190634/?rf=cons_tt_atf&ref_=cons_tt_atf
  - text: STREAMING
  - group:
    - group:
      - img "Watch on Prime Video"
      - link "Watch on Prime Video":
        - /url: https://www.primevideo.com/detail/amzn1.dv.gti.d9a17eaa-1a66-416a-a169-610fc3ec9f17
    - link "Watch on Prime Video":
      - /url: https://www.primevideo.com/detail/amzn1.dv.gti.d9a17eaa-1a66-416a-a169-610fc3ec9f17
      - text: S1-5
  - link "Set your preferred services":
    - /url: /preferences/preferredservices/?ref_=tt_ov_wbr_btn
  - button "Add to Watchlist Added by 809K users"
  - button "Add title to another list"
  - button "Mark The Boys as watched": Mark as watched
  - link "4.9K User reviews":
    - /url: /title/tt1190634/reviews/?ref_=tt_ov_ururv
  - link "225 Critic reviews":
    - /url: /title/tt1190634/externalreviews/?ref_=tt_ov_crv
  - 'link "Top rated TV #202"':
    - /url: /chart/toptv/?ref_=tt_awd
  - link "See more awards and nominations":
    - /url: /title/tt1190634/awards/?ref_=tt_awd
    - text: Won 4 Primetime Emmys
  - text: 26 wins & 97 nominations total
  - link "See more awards and nominations":
    - /url: /title/tt1190634/awards/?ref_=tt_awd
  - link "Episodes":
    - /url: /title/tt1190634/episodes/?ref_=tt_epspo_eps
    - heading "Episodes" [level=3]
  - text: Season
  - tablist:
    - tab "S1" [selected]
    - tab "S2"
    - tab "S3"
    - tab "S4"
    - tab "S5"
  - text: S1 Episodes 8.5 Average from 239K episode ratings
  - tablist:
    - 'tab "Episode 1 of 8, rated 8.7/10: The Name of the Game. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 8.7 E1
    - 'tab "Episode 2 of 8, rated 8.5/10: Cherry. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 8.5 E2
    - 'tab "Episode 3 of 8, rated 8.3/10: Get Some. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 8.3 E3
    - 'tab "Episode 4 of 8, rated 8.7/10: The Female of the Species. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 8.7 E4
    - 'tab "Episode 5 of 8, rated 8.3/10: Good for the Soul. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 8.3 E5
    - 'tab "Episode 6 of 8, rated 8.1/10: The Innocents. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 8.1 E6
    - 'tab "Episode 7 of 8, rated 8.7/10: The Self-Preservation Society. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 8.7 E7
    - 'tab "Episode 8 of 8, rated 9.1/10: You Found Me. Select enter for more details and rating, use left and right arrow keys for other episodes, use up arrow key to select other seasons"': 9.1 E8
  - tabpanel:
    - img "Antony Starr, Jaden Martin, and Anton Gillis-Adelman in The Boys (2019)"
    - text: S1.E1 Fri, Jul 26, 2019
    - link "The Name of the Game":
      - /url: /title/tt7775902/?ref_=tt_epspo_ep_1
      - heading "The Name of the Game" [level=3]
    - text: 8.7 (38K)
    - paragraph: When a Supe kills the love of his life, A/V salesman Hughie Campbell teams up with Billy Butcher, a vigilante hell-bent on punishing corrupt Supes -- and Hughie's life will never be the same again.
    - text: "Your rating:"
    - button "Rate The Name of the Game 1 out of 10"
    - button "Rate The Name of the Game 2 out of 10"
    - button "Rate The Name of the Game 3 out of 10"
    - button "Rate The Name of the Game 4 out of 10"
    - button "Rate The Name of the Game 5 out of 10"
    - button "Rate The Name of the Game 6 out of 10"
    - button "Rate The Name of the Game 7 out of 10"
    - button "Rate The Name of the Game 8 out of 10"
    - button "Rate The Name of the Game 9 out of 10"
    - button "Rate The Name of the Game 10 out of 10"
  - tabpanel:
    - img "Karl Urban, Jack Quaid, and Tomer Capone in The Boys (2019)"
    - text: S1.E2 Fri, Jul 26, 2019
    - link "Cherry":
      - /url: /title/tt8100946/?ref_=tt_epspo_ep_2
      - heading "Cherry" [level=3]
    - text: 8.5 (30K)
    - paragraph: The Boys get themselves a Superhero, Starlight gets payback, Homelander gets naughty, and a Senator gets naughtier.
    - text: "Your rating:"
    - button "Rate Cherry 1 out of 10"
    - button "Rate Cherry 2 out of 10"
    - button "Rate Cherry 3 out of 10"
    - button "Rate Cherry 4 out of 10"
    - button "Rate Cherry 5 out of 10"
    - button "Rate Cherry 6 out of 10"
    - button "Rate Cherry 7 out of 10"
    - button "Rate Cherry 8 out of 10"
    - button "Rate Cherry 9 out of 10"
    - button "Rate Cherry 10 out of 10"
  - tabpanel:
    - img "Jessie T. Usher in The Boys (2019)"
    - text: S1.E3 Fri, Jul 26, 2019
    - link "Get Some":
      - /url: /title/tt8100948/?ref_=tt_epspo_ep_3
      - heading "Get Some" [level=3]
    - text: 8.3 (29K)
    - paragraph: It's the race of the century. A-Train versus Shockwave, vying for the title of World's Fastest Man. Meanwhile, the Boys are reunited and it feels so good.
    - text: "Your rating:"
    - button "Rate Get Some 1 out of 10"
    - button "Rate Get Some 2 out of 10"
    - button "Rate Get Some 3 out of 10"
    - button "Rate Get Some 4 out of 10"
    - button "Rate Get Some 5 out of 10"
    - button "Rate Get Some 6 out of 10"
    - button "Rate Get Some 7 out of 10"
    - button "Rate Get Some 8 out of 10"
    - button "Rate Get Some 9 out of 10"
    - button "Rate Get Some 10 out of 10"
  - tabpanel:
    - img "Antony Starr in The Boys (2019)"
    - text: S1.E4 Fri, Jul 26, 2019
    - link "The Female of the Species":
      - /url: /title/tt8100950/?ref_=tt_epspo_ep_4
      - heading "The Female of the Species" [level=3]
    - text: 8.7 (29K)
    - paragraph: On a very special episode of The Boys... an hour of guts, gutterballs, airplane hijackings, madness, ghosts, and one very intriguing Female. Oh, and lots of heart -- both in the sentimental sense, and in the gory literal sense.
    - text: "Your rating:"
    - button "Rate The Female of the Species 1 out of 10"
    - button "Rate The Female of the Species 2 out of 10"
    - button "Rate The Female of the Species 3 out of 10"
    - button "Rate The Female of the Species 4 out of 10"
    - button "Rate The Female of the Species 5 out of 10"
    - button "Rate The Female of the Species 6 out of 10"
    - button "Rate The Female of the Species 7 out of 10"
    - button "Rate The Female of the Species 8 out of 10"
    - button "Rate The Female of the Species 9 out of 10"
    - button "Rate The Female of the Species 10 out of 10"
  - tabpanel:
    - img "Laz Alonso and Karl Urban in The Boys (2019)"
    - text: S1.E5 Fri, Jul 26, 2019
    - link "Good for the Soul":
      - /url: /title/tt8100952/?ref_=tt_epspo_ep_5
      - heading "Good for the Soul" [level=3]
    - text: 8.3 (28K)
    - paragraph: The Boys head to the "Believe" Expo to follow a promising lead in their ongoing war against the Supes. There might -- MIGHT -- be a homicidal infant, but you'll have to see for yourself.
    - text: "Your rating:"
    - button "Rate Good for the Soul 1 out of 10"
    - button "Rate Good for the Soul 2 out of 10"
    - button "Rate Good for the Soul 3 out of 10"
    - button "Rate Good for the Soul 4 out of 10"
    - button "Rate Good for the Soul 5 out of 10"
    - button "Rate Good for the Soul 6 out of 10"
    - button "Rate Good for the Soul 7 out of 10"
    - button "Rate Good for the Soul 8 out of 10"
    - button "Rate Good for the Soul 9 out of 10"
    - button "Rate Good for the Soul 10 out of 10"
  - tabpanel:
    - img "The Boys (2019)"
    - text: S1.E6 Fri, Jul 26, 2019
    - link "The Innocents":
      - /url: /title/tt8100954/?ref_=tt_epspo_ep_6
      - heading "The Innocents" [level=3]
    - text: 8.1 (27K)
    - paragraph: "SUPER IN AMERICA (2019). Vought Studios. Genre: Reality. Starring: Homelander, Queen Maeve, Black Noir, The Deep, A-Train, Starlight, Tara Reid, Billy Zane."
    - text: "Your rating:"
    - button "Rate The Innocents 1 out of 10"
    - button "Rate The Innocents 2 out of 10"
    - button "Rate The Innocents 3 out of 10"
    - button "Rate The Innocents 4 out of 10"
    - button "Rate The Innocents 5 out of 10"
    - button "Rate The Innocents 6 out of 10"
    - button "Rate The Innocents 7 out of 10"
    - button "Rate The Innocents 8 out of 10"
    - button "Rate The Innocents 9 out of 10"
    - button "Rate The Innocents 10 out of 10"
  - tabpanel:
    - img "Karl Urban and Shantel VanSanten in The Boys (2019)"
    - text: S1.E7 Fri, Jul 26, 2019
    - link "The Self-Preservation Society":
      - /url: /title/tt8100956/?ref_=tt_epspo_ep_7
      - heading "The Self-Preservation Society" [level=3]
    - text: 8.7 (27K)
    - paragraph: Never trust a washed-up Supe -- the Boys learn this lesson the hard way. Meanwhile, Homelander digs into his past, Starlight discovers that love hurts, and if you're ever in Sandusky, Ohio and a girl asks if she can touch your gills, say NO.
    - text: "Your rating:"
    - button "Rate The Self-Preservation Society 1 out of 10"
    - button "Rate The Self-Preservation Society 2 out of 10"
    - button "Rate The Self-Preservation Society 3 out of 10"
    - button "Rate The Self-Preservation Society 4 out of 10"
    - button "Rate The Self-Preservation Society 5 out of 10"
    - button "Rate The Self-Preservation Society 6 out of 10"
    - button "Rate The Self-Preservation Society 7 out of 10"
    - button "Rate The Self-Preservation Society 8 out of 10"
    - button "Rate The Self-Preservation Society 9 out of 10"
    - button "Rate The Self-Preservation Society 10 out of 10"
  - tabpanel:
    - img "Erin Moriarty and Jack Quaid in The Boys (2019)"
    - text: S1.E8 Fri, Jul 26, 2019
    - link "You Found Me":
      - /url: /title/tt8100958/?ref_=tt_epspo_ep_8
      - heading "You Found Me" [level=3]
    - text: 9.1 (32K)
    - paragraph: Season Finale Time! Questions answered! Secrets revealed! Conflicts... conflicted! Characters exploded! And so much more!
    - text: "Your rating:"
    - button "Rate You Found Me 1 out of 10"
    - button "Rate You Found Me 2 out of 10"
    - button "Rate You Found Me 3 out of 10"
    - button "Rate You Found Me 4 out of 10"
    - button "Rate You Found Me 5 out of 10"
    - button "Rate You Found Me 6 out of 10"
    - button "Rate You Found Me 7 out of 10"
    - button "Rate You Found Me 8 out of 10"
    - button "Rate You Found Me 9 out of 10"
    - button "Rate You Found Me 10 out of 10"
  - button "Previous episode"
  - button "Next episode"
  - link "Videos 209":
    - /url: /title/tt1190634/videogallery/?ref_=tt_vids_sm
    - heading "Videos 209" [level=3]
  - group:
    - group:
      - 'img "The Boys: Establishing The Voice - Featurette"'
      - 'link "ClipThe Boys: Establishing The Voice - Featurette"':
        - /url: /video/vi1661913881/?ref_=tt_vids_vi_1
        - text: Clip 3:00
    - 'link "ClipThe Boys: Establishing The Voice - Featurette"':
      - /url: /video/vi1661913881/?ref_=tt_vids_vi_t_1
      - text: "The Boys: Establishing The Voice - Featurette"
    - img "1 person liked this video"
  - group:
    - group:
      - 'img "The Boys: Final Scene - Clip"'
      - 'link "ClipThe Boys: Final Scene - Clip"':
        - /url: /video/vi1158335257/?ref_=tt_vids_vi_2
        - text: Clip 4:59
    - 'link "ClipThe Boys: Final Scene - Clip"':
      - /url: /video/vi1158335257/?ref_=tt_vids_vi_t_2
      - text: "The Boys: Final Scene - Clip"
    - img "2 people liked this video"
    - img "There are 3 Love it reactions to this video from other people"
  - group:
    - group:
      - group:
        - 'img "The Boys: Hughie Stops Butcher from Unleashing the Virus - Clip"'
        - 'link "ClipThe Boys: Hughie Stops Butcher from Unleashing the Virus - Clip"':
          - /url: /video/vi2349452057/?ref_=tt_vids_vi_3
          - text: Clip 5:01
      - 'link "ClipThe Boys: Hughie Stops Butcher from Unleashing the Virus - Clip"':
        - /url: /video/vi2349452057/?ref_=tt_vids_vi_t_3
        - text: "The Boys: Hughie Stops Butcher from Unleashing the Virus - Clip"
      - img "2 people liked this video"
      - img "There are 2 reactions to this video from other people, primarily Love it and Appreciate emojis"
    - group:
      - group:
        - 'img "The Boys: Homelander''s Final Stand - Clip"'
        - 'link "ClipThe Boys: Homelander''s Final Stand - Clip"':
          - /url: /video/vi3037252377/?ref_=tt_vids_vi_4
          - text: Clip 2:54
      - 'link "ClipThe Boys: Homelander''s Final Stand - Clip"':
        - /url: /video/vi3037252377/?ref_=tt_vids_vi_t_4
        - text: "The Boys: Homelander's Final Stand - Clip"
      - img "6 people liked this video"
      - img "There are 6 reactions to this video from other people, primarily Love it and Insightful emojis"
    - group:
      - group:
        - 'img "The Boys Season 3: The Deep Eats Timothy - Clip"'
        - 'link "ClipThe Boys Season 3: The Deep Eats Timothy - Clip"':
          - /url: /video/vi2517027609/?ref_=tt_vids_vi_5
          - text: Clip 3:49
      - 'link "ClipThe Boys Season 3: The Deep Eats Timothy - Clip"':
        - /url: /video/vi2517027609/?ref_=tt_vids_vi_t_5
        - text: "The Boys Season 3: The Deep Eats Timothy - Clip"
      - img "2 people liked this video"
      - img "There is 1 Love it reaction to this video from other people"
    - group:
      - group:
        - 'img "The Boys: Oh-Father Confronts Starlight - Clip"'
        - 'link "ClipThe Boys: Oh-Father Confronts Starlight - Clip"':
          - /url: /video/vi3405826841/?ref_=tt_vids_vi_6
          - text: Clip 4:47
      - 'link "ClipThe Boys: Oh-Father Confronts Starlight - Clip"':
        - /url: /video/vi3405826841/?ref_=tt_vids_vi_t_6
        - text: "The Boys: Oh-Father Confronts Starlight - Clip"
      - img "7 people liked this video"
      - img "There are 4 reactions to this video from other people, primarily Love it and Funny emojis"
  - link "Photos 1999":
    - /url: /title/tt1190634/mediaviewer/rm1431161346/?ref_=tt_ph_sm
    - heading "Photos 1999" [level=3]
  - button "Add photo"
  - link "View Poster":
    - /url: /title/tt1190634/mediaviewer/rm1431161346/?ref_=tt_ph_1
    - img "View Poster"
  - link "View Poster":
    - /url: /title/tt1190634/mediaviewer/rm1447938562/?ref_=tt_ph_2
    - img "View Poster"
  - link "View Poster":
    - /url: /title/tt1190634/mediaviewer/rm1464715778/?ref_=tt_ph_1_1
    - img "View Poster"
  - link "View Poster":
    - /url: /title/tt1190634/mediaviewer/rm1229834754/?ref_=tt_ph_1_2
    - img "View Poster"
  - link "+ 2K View Poster":
    - /url: /title/tt1190634/mediaviewer/rm1053980161/?ref_=tt_ph_more
    - text: + 2K
    - img "View Poster"
  - link "Top Cast 99+":
    - /url: /title/tt1190634/fullcredits/?ref_=tt_cst_sm
    - heading "Top Cast 99+" [level=3]
  - 'button "Top Cast: edit"': Edit
  - group:
    - group:
      - img "Karl Urban"
      - button "Add Karl Urban to favorite people"
      - link "Go to Karl Urban":
        - /url: /name/nm0881631/?ref_=tt_cst_i_1
    - link "Karl Urban":
      - /url: /name/nm0881631/?ref_=tt_cst_t_1
    - link "Billy Butcher":
      - /url: /title/tt1190634/characters/nm0881631/?ref_=tt_cst_c_1
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Jack Quaid"
      - button "Add Jack Quaid to favorite people"
      - link "Go to Jack Quaid":
        - /url: /name/nm4425051/?ref_=tt_cst_i_2
    - link "Jack Quaid":
      - /url: /name/nm4425051/?ref_=tt_cst_t_2
    - link "Hughie Campbell":
      - /url: /title/tt1190634/characters/nm4425051/?ref_=tt_cst_c_2
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Antony Starr"
      - button "Add Antony Starr to favorite people"
      - link "Go to Antony Starr":
        - /url: /name/nm1102278/?ref_=tt_cst_i_3
    - link "Antony Starr":
      - /url: /name/nm1102278/?ref_=tt_cst_t_3
    - link "Homelander":
      - /url: /title/tt1190634/characters/nm1102278/?ref_=tt_cst_c_3
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Erin Moriarty"
      - button "Add Erin Moriarty to favorite people"
      - link "Go to Erin Moriarty":
        - /url: /name/nm3929195/?ref_=tt_cst_i_4
    - link "Erin Moriarty":
      - /url: /name/nm3929195/?ref_=tt_cst_t_4
    - link "Starlight":
      - /url: /title/tt1190634/characters/nm3929195/?ref_=tt_cst_c_4
    - text: …
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Jessie T. Usher"
      - button "Add Jessie T. Usher to favorite people"
      - link "Go to Jessie T. Usher":
        - /url: /name/nm1900772/?ref_=tt_cst_i_5
    - link "Jessie T. Usher":
      - /url: /name/nm1900772/?ref_=tt_cst_t_5
    - link "A-Train":
      - /url: /title/tt1190634/characters/nm1900772/?ref_=tt_cst_c_5
    - text: …
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Laz Alonso"
      - button "Add Laz Alonso to favorite people"
      - link "Go to Laz Alonso":
        - /url: /name/nm0022306/?ref_=tt_cst_i_6
    - link "Laz Alonso":
      - /url: /name/nm0022306/?ref_=tt_cst_t_6
    - link "Mother's Milk":
      - /url: /title/tt1190634/characters/nm0022306/?ref_=tt_cst_c_6
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Chace Crawford"
      - button "Add Chace Crawford to favorite people"
      - link "Go to Chace Crawford":
        - /url: /name/nm2003700/?ref_=tt_cst_i_7
    - link "Chace Crawford":
      - /url: /name/nm2003700/?ref_=tt_cst_t_7
    - link "The Deep":
      - /url: /title/tt1190634/characters/nm2003700/?ref_=tt_cst_c_7
    - text: …
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Tomer Capone"
      - button "Add Tomer Capone to favorite people"
      - link "Go to Tomer Capone":
        - /url: /name/nm6150071/?ref_=tt_cst_i_8
    - link "Tomer Capone":
      - /url: /name/nm6150071/?ref_=tt_cst_t_8
    - link "Frenchie":
      - /url: /title/tt1190634/characters/nm6150071/?ref_=tt_cst_c_8
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Karen Fukuhara"
      - button "Add Karen Fukuhara to favorite people"
      - link "Go to Karen Fukuhara":
        - /url: /name/nm7232332/?ref_=tt_cst_i_9
    - link "Karen Fukuhara":
      - /url: /name/nm7232332/?ref_=tt_cst_t_9
    - link "Kimiko Miyashiro":
      - /url: /title/tt1190634/characters/nm7232332/?ref_=tt_cst_c_9
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Nathan Mitchell"
      - button "Add Nathan Mitchell to favorite people"
      - link "Go to Nathan Mitchell":
        - /url: /name/nm1756121/?ref_=tt_cst_i_10
    - link "Nathan Mitchell":
      - /url: /name/nm1756121/?ref_=tt_cst_t_10
    - link "Black Noir":
      - /url: /title/tt1190634/characters/nm1756121/?ref_=tt_cst_c_10
    - text: …
    - button "40 episodes"
    - text: • 2019–2026
    - group:
      - img "Colby Minifie"
      - button "Add Colby Minifie to favorite people"
      - link "Go to Colby Minifie":
        - /url: /name/nm2281371/?ref_=tt_cst_i_11
    - link "Colby Minifie":
      - /url: /name/nm2281371/?ref_=tt_cst_t_11
    - link "Ashley Barrett":
      - /url: /title/tt1190634/characters/nm2281371/?ref_=tt_cst_c_11
    - button "37 episodes"
    - text: • 2019–2026
    - group:
      - img "Dominique McElligott"
      - button "Add Dominique McElligott to favorite people"
      - link "Go to Dominique McElligott":
        - /url: /name/nm1069800/?ref_=tt_cst_i_12
    - link "Dominique McElligott":
      - /url: /name/nm1069800/?ref_=tt_cst_t_12
    - link "Queen Maeve":
      - /url: /title/tt1190634/characters/nm1069800/?ref_=tt_cst_c_12
    - text: …
    - button "25 episodes"
    - text: • 2019–2024
    - group:
      - img "Claudia Doumit"
      - button "Add Claudia Doumit to favorite people"
      - link "Go to Claudia Doumit":
        - /url: /name/nm4707628/?ref_=tt_cst_i_13
    - link "Claudia Doumit":
      - /url: /name/nm4707628/?ref_=tt_cst_t_13
    - link "Victoria Neuman":
      - /url: /title/tt1190634/characters/nm4707628/?ref_=tt_cst_c_13
    - button "21 episodes"
    - text: • 2020–2024
    - group:
      - img "Cameron Crovetti"
      - button "Add Cameron Crovetti to favorite people"
      - link "Go to Cameron Crovetti":
        - /url: /name/nm7805172/?ref_=tt_cst_i_14
    - link "Cameron Crovetti":
      - /url: /name/nm7805172/?ref_=tt_cst_t_14
    - link "Ryan":
      - /url: /title/tt1190634/characters/nm7805172/?ref_=tt_cst_c_14
    - button "19 episodes"
    - text: • 2020–2026
    - group:
      - img
      - button "Add Nneka Elliott to favorite people"
      - link "Go to Nneka Elliott":
        - /url: /name/nm6970024/?ref_=tt_cst_i_15
    - link "Nneka Elliott":
      - /url: /name/nm6970024/?ref_=tt_cst_t_15
    - link "NNC News Anchor":
      - /url: /title/tt1190634/characters/nm6970024/?ref_=tt_cst_c_15
    - text: …
    - button "17 episodes"
    - text: • 2019–2026
    - group:
      - img "Susan Heyward"
      - button "Add Susan Heyward to favorite people"
      - link "Go to Susan Heyward":
        - /url: /name/nm2526851/?ref_=tt_cst_i_16
    - link "Susan Heyward":
      - /url: /name/nm2526851/?ref_=tt_cst_t_16
    - link "Sister Sage":
      - /url: /title/tt1190634/characters/nm2526851/?ref_=tt_cst_c_16
    - button "16 episodes"
    - text: • 2024–2026
    - group:
      - img "Valorie Curry"
      - button "Add Valorie Curry to favorite people"
      - link "Go to Valorie Curry":
        - /url: /name/nm2038170/?ref_=tt_cst_i_17
    - link "Valorie Curry":
      - /url: /name/nm2038170/?ref_=tt_cst_t_17
    - link "Firecracker":
      - /url: /title/tt1190634/characters/nm2038170/?ref_=tt_cst_c_17
    - button "16 episodes"
    - text: • 2024–2026
    - group:
      - img "Jensen Ackles"
      - button "Add Jensen Ackles to favorite people"
      - link "Go to Jensen Ackles":
        - /url: /name/nm0010075/?ref_=tt_cst_i_18
    - link "Jensen Ackles":
      - /url: /name/nm0010075/?ref_=tt_cst_t_18
    - link "Soldier Boy":
      - /url: /title/tt1190634/characters/nm0010075/?ref_=tt_cst_c_18
    - text: …
    - button "15 episodes"
    - text: • 2022–2026
  - text: Creator
  - link "Eric Kripke":
    - /url: /name/nm0471392/?ref_=tt_cst_1_1
  - link "See full cast and crew":
    - /url: /title/tt1190634/fullcredits/?ref_=tt_cst_sm
    - text: All cast & crew
  - link "See full cast and crew":
    - /url: /title/tt1190634/fullcredits/?ref_=tt_cst_sm
  - link "Production, box office & more at IMDbPro":
    - /url: https://pro.imdb.com/title/tt1190634/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
  - link "Production, box office & more at IMDbPro":
    - /url: https://pro.imdb.com/title/tt1190634/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
  - link "User reviews 4.9K":
    - /url: /title/tt1190634/reviews/?ref_=tt_ururv_sm
    - heading "User reviews 4.9K" [level=3]
  - button "Review"
  - text: 8.5 984.6K
  - link "87180 1-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=1&ref_=tt_ururv_histo_1
    - text: "1"
  - link "23120 2-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=2&ref_=tt_ururv_histo_2
    - text: "2"
  - link "4723 3-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=3&ref_=tt_ururv_histo_3
    - text: "3"
  - link "5979 4-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=4&ref_=tt_ururv_histo_4
    - text: "4"
  - link "11324 5-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=5&ref_=tt_ururv_histo_5
    - text: "5"
  - link "26279 6-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=6&ref_=tt_ururv_histo_6
    - text: "6"
  - link "78567 7-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=7&ref_=tt_ururv_histo_7
    - text: "7"
  - link "206934 8-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=8&ref_=tt_ururv_histo_8
    - text: "8"
  - link "281177 9-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=9&ref_=tt_ururv_histo_9
    - text: "9"
  - link "259385 10-star reviews. Select to read them.":
    - /url: /title/tt1190634/reviews/?rating=10&ref_=tt_ururv_histo_10
    - text: "10"
  - heading "Featured reviews" [level=3]
  - group:
    - link "User willfrith":
      - /url: /user/p.mv7tv6cyj2z7tewr343dysxcdi/?ref_=tt_ururv_c_1_uname
      - group:
        - img
        - img "Placeholder profile image"
      - text: willfrith
    - text: "10"
    - link "It's 4am":
      - /url: /title/tt1190634/reviews/?featured=rw5020170&ref_=tt_ururv_c_1_hd
      - heading "It's 4am" [level=3]
    - text: Started watching this brilliant spin on a superhero show after dinner. Now it's 4 am and I have just watched the whole thing. From the very first episode I was glued to this exciting, interesting and crazy ride.
    - link "User ciobanualin-94020":
      - /url: /user/p.xy5hakiulnxya4kxbrsewlr3qm/?ref_=tt_ururv_c_2_uname
      - group:
        - img
        - img "Placeholder profile image"
      - text: ciobanualin-94020
    - text: "8"
    - link "It's exactly the opposite of your usual superhero show!":
      - /url: /title/tt1190634/reviews/?featured=rw7621343&ref_=tt_ururv_c_2_hd
      - heading "It's exactly the opposite of your usual superhero show!" [level=3]
    - text: I've had big expectations about this show, because I thought that is going to be exactly that kind of show, in which the good guys (the superheroes) fight the bad guys (the villains) and of course, they win. I couldn't have been more wrong, especially because "The Boys" it's not about a desperate attempt of superheroes to save the world from evil, instead this show takes a much more realistic approach, about what is going to happen if superheroes had really existed. I'm saying that I had big expectations in the beginning, because I thought that it would be the same usual show with superheroes and villain, that is most likely to find everywhere. In the first couple of episodes I've been a little bit disappointed, or rather shocked, because like I've already said, "The Boys" describes what the MCU never did. Of course, the movies and shows from Marvel are destined to other public's category, but this show is tough. It has all you could not expect from a TV series with superheroes. It has violence, gore, nudity, astonishing CGI effects and a very unpredictable and solid storyline. In the end it seems that this one delivered what I didn't expect it to and I am pleased with that. The show is definitely worth watching.
    - link "User nuddywizz":
      - /url: /user/p.ee7zrrcefhg2jirvwn4epiweyi/?ref_=tt_ururv_c_3_uname
      - group:
        - img
        - img "Placeholder profile image"
      - text: nuddywizz
    - text: "10"
    - link "About time":
      - /url: /title/tt1190634/reviews/?featured=rw5034608&ref_=tt_ururv_c_3_hd
      - heading "About time" [level=3]
    - text: With all these awful shows like supergirl and legends of tomorrow etc..The Boys is the perfect antidote to that insipid moralistic tripe that's spewed our TVs so thank you Amazon Prime for treating us like adults and I can't wait for the second season
    - link "User iGlad":
      - /url: /user/p.l4siwgqqjmvrvvjpacqjh6aigq/?ref_=tt_ururv_c_4_uname
      - group:
        - img
        - img "Placeholder profile image"
      - text: iGlad
    - text: "9"
    - link "My Antidote to Marvel and Co.":
      - /url: /title/tt1190634/reviews/?featured=rw5020019&ref_=tt_ururv_c_4_hd
      - heading "My Antidote to Marvel and Co." [level=3]
    - text: Having being all superheroed out with the never ending train of films this is so much welcome relief. It's not for kids and I love the choice language which is appropriate.
    - link "User ernieb-21918":
      - /url: /user/p.yjvpabynuco6qoduhzw32j5zxq/?ref_=tt_ururv_c_5_uname
      - group:
        - img
        - img "Placeholder profile image"
      - text: ernieb-21918
    - text: "9"
    - link "Super hero reality check in affect":
      - /url: /title/tt1190634/reviews/?featured=rw5024416&ref_=tt_ururv_c_5_hd
      - heading "Super hero reality check in affect" [level=3]
    - text: Want to see what it would really be like with super heroes around? Check this out! No kids play here folks....not for kids. Best damn series on right now....about time!
  - heading "\"The Boys,\" In and Out of Costume" [level=2]
  - text: Celebrate the final season of "The Boys" with a closer look at the stars both in costume and out of their super suits.
  - link "See the gallery":
    - /url: /gallery/rg2699597824/mediaviewer/rm1348959233/?ref_=tt_c_g_boys_io_cta
  - group:
    - group:
      - img "Production art"
      - link "Photos":
        - /url: /gallery/rg2699597824/mediaviewer/rm1348959233/?ref_=tt_g_boys_io_i
  - heading "More like this" [level=3]
  - link "More information":
    - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
  - group:
    - group:
      - group:
        - img "Invincible"
        - button "Add to Watchlist"
        - link "View title page for Invincible":
          - /url: /title/tt6741278/?ref_=tt_mlt_i_1
      - text: "8.7"
      - button "Rate Invincible"
      - link "View title page for Invincible":
        - /url: /title/tt6741278/?ref_=tt_mlt_t_1
        - text: Invincible
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "Gen V"
        - button "Add to Watchlist"
        - link "View title page for Gen V":
          - /url: /title/tt13159924/?ref_=tt_mlt_i_2
      - text: "7.6"
      - button "Rate Gen V"
      - link "View title page for Gen V":
        - /url: /title/tt13159924/?ref_=tt_mlt_t_2
        - text: Gen V
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "Breaking Bad"
        - button "Add to Watchlist"
        - link "View title page for Breaking Bad":
          - /url: /title/tt0903747/?ref_=tt_mlt_i_3
      - text: "9.5"
      - button "Rate Breaking Bad"
      - link "View title page for Breaking Bad":
        - /url: /title/tt0903747/?ref_=tt_mlt_t_3
        - text: Breaking Bad
      - button "Add to Watchlist": Watchlist
      - button "More about this"
    - group:
      - group:
        - img "Stranger Things"
        - button "Add to Watchlist"
        - link "View title page for Stranger Things":
          - /url: /title/tt4574334/?ref_=tt_mlt_i_4
      - text: "8.6"
      - button "Rate Stranger Things"
      - link "View title page for Stranger Things":
        - /url: /title/tt4574334/?ref_=tt_mlt_t_4
        - text: Stranger Things
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "Game of Thrones"
        - button "Add to Watchlist"
        - link "View title page for Game of Thrones":
          - /url: /title/tt0944947/?ref_=tt_mlt_i_5
      - text: "9.2"
      - button "Rate Game of Thrones"
      - link "View title page for Game of Thrones":
        - /url: /title/tt0944947/?ref_=tt_mlt_t_5
        - text: Game of Thrones
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "Vought Rising"
        - button "Add to Watchlist"
        - link "View title page for Vought Rising":
          - /url: /title/tt33041431/?ref_=tt_mlt_i_6
      - link "View title page for Vought Rising":
        - /url: /title/tt33041431/?ref_=tt_mlt_t_6
        - text: Vought Rising
      - button "Add to Watchlist": Watchlist
      - button "More about this"
    - group:
      - group:
        - img "Dexter"
        - button "Add to Watchlist"
        - link "View title page for Dexter":
          - /url: /title/tt0773262/?ref_=tt_mlt_i_7
      - text: "8.6"
      - button "Rate Dexter"
      - link "View title page for Dexter":
        - /url: /title/tt0773262/?ref_=tt_mlt_t_7
        - text: Dexter
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "Better Call Saul"
        - button "Add to Watchlist"
        - link "View title page for Better Call Saul":
          - /url: /title/tt3032476/?ref_=tt_mlt_i_8
      - text: "9.0"
      - button "Rate Better Call Saul"
      - link "View title page for Better Call Saul":
        - /url: /title/tt3032476/?ref_=tt_mlt_t_8
        - text: Better Call Saul
      - button "Add to Watchlist": Watchlist
      - button "More about this"
    - group:
      - group:
        - img "The Walking Dead"
        - button "Add to Watchlist"
        - link "View title page for The Walking Dead":
          - /url: /title/tt1520211/?ref_=tt_mlt_i_9
      - text: "8.1"
      - button "Rate The Walking Dead"
      - link "View title page for The Walking Dead":
        - /url: /title/tt1520211/?ref_=tt_mlt_t_9
        - text: The Walking Dead
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "The Mandalorian"
        - button "Add to Watchlist"
        - link "View title page for The Mandalorian":
          - /url: /title/tt8111088/?ref_=tt_mlt_i_10
      - text: "8.6"
      - button "Rate The Mandalorian"
      - link "View title page for The Mandalorian":
        - /url: /title/tt8111088/?ref_=tt_mlt_t_10
        - text: The Mandalorian
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "Squid Game"
        - button "Add to Watchlist"
        - link "View title page for Squid Game":
          - /url: /title/tt10919420/?ref_=tt_mlt_i_11
      - text: "7.9"
      - button "Rate Squid Game"
      - link "View title page for Squid Game":
        - /url: /title/tt10919420/?ref_=tt_mlt_t_11
        - text: Squid Game
      - button "Watch options"
      - button "More about this"
    - group:
      - group:
        - img "Peaky Blinders"
        - button "Add to Watchlist"
        - link "View title page for Peaky Blinders":
          - /url: /title/tt2442560/?ref_=tt_mlt_i_12
      - text: "8.7"
      - button "Rate Peaky Blinders"
      - link "View title page for Peaky Blinders":
        - /url: /title/tt2442560/?ref_=tt_mlt_t_12
        - text: Peaky Blinders
      - button "Add to Watchlist": Watchlist
      - button "More about this"
  - link "Related interests":
    - /url: /interest/all/?ref_=tt_rin_sm
    - heading "Related interests" [level=3]
  - group:
    - group:
      - img "Phoebe Waller-Bridge and Sian Clifford in Fleabag (2016)"
      - button "Add Dark Comedy to your interests"
      - link "Dark Comedy":
        - /url: /interest/in0000035/?ref_=tt_rin_in_i_1
    - link "Dark Comedy":
      - /url: /interest/in0000035/?ref_=tt_rin_in_t_1
    - group:
      - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
      - button "Add Psychological Drama to your interests"
      - link "Psychological Drama":
        - /url: /interest/in0000086/?ref_=tt_rin_in_i_2
    - link "Psychological Drama":
      - /url: /interest/in0000086/?ref_=tt_rin_in_t_2
    - group:
      - img "Mark Wahlberg and Seth MacFarlane in Ted 2 (2015)"
      - button "Add Raunchy Comedy to your interests"
      - link "Raunchy Comedy":
        - /url: /interest/in0000041/?ref_=tt_rin_in_i_3
    - link "Raunchy Comedy":
      - /url: /interest/in0000041/?ref_=tt_rin_in_t_3
    - group:
      - 'img "Peter Sellers in Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)"'
      - button "Add Satire to your interests"
      - link "Satire":
        - /url: /interest/in0000042/?ref_=tt_rin_in_i_4
    - link "Satire":
      - /url: /interest/in0000042/?ref_=tt_rin_in_t_4
    - group:
      - 'img "Leslie Nielsen in The Naked Gun: From the Files of Police Squad! (1988)"'
      - button "Add Slapstick to your interests"
      - link "Slapstick":
        - /url: /interest/in0000046/?ref_=tt_rin_in_i_5
    - link "Slapstick":
      - /url: /interest/in0000046/?ref_=tt_rin_in_t_5
    - group:
      - img "Robert Downey Jr., Chris Evans, Scarlett Johansson, Jeremy Renner, Mark Ruffalo, and Chris Hemsworth"
      - button "Add Superhero to your interests"
      - link "Superhero":
        - /url: /interest/in0000008/?ref_=tt_rin_in_i_6
    - link "Superhero":
      - /url: /interest/in0000008/?ref_=tt_rin_in_t_6
    - group:
      - img "Bruce Willis and Taniel in Die Hard (1988)"
      - button "Add Action to your interests"
      - link "Action":
        - /url: /interest/in0000001/?ref_=tt_rin_in_i_7
    - link "Action":
      - /url: /interest/in0000001/?ref_=tt_rin_in_t_7
    - group:
      - 'img "Will Ferrell, Angela Grillo, and Lap-Gei Cheung in Anchorman: The Legend of Ron Burgundy (2004)"'
      - button "Add Comedy to your interests"
      - link "Comedy":
        - /url: /interest/in0000034/?ref_=tt_rin_in_i_8
    - link "Comedy":
      - /url: /interest/in0000034/?ref_=tt_rin_in_t_8
    - group:
      - img "James Gandolfini, Edie Falco, Sharon Angela, Max Casella, Dan Grimaldi, Joe Perrino, Donna Pescow, Jamie Lynn Sigler, Tony Sirico, and Michael Drayer in The Sopranos (1999)"
      - button "Add Crime to your interests"
      - link "Crime":
        - /url: /interest/in0000052/?ref_=tt_rin_in_i_9
    - link "Crime":
      - /url: /interest/in0000052/?ref_=tt_rin_in_t_9
    - group:
      - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
      - button "Add Drama to your interests"
      - link "Drama":
        - /url: /interest/in0000076/?ref_=tt_rin_in_i_10
    - link "Drama":
      - /url: /interest/in0000076/?ref_=tt_rin_in_t_10
    - group:
      - 'img "James Earl Jones and David Prowse in Star Wars: Episode V - The Empire Strikes Back (1980)"'
      - button "Add Sci-Fi to your interests"
      - link "Sci-Fi":
        - /url: /interest/in0000162/?ref_=tt_rin_in_i_11
    - link "Sci-Fi":
      - /url: /interest/in0000162/?ref_=tt_rin_in_t_11
  - link "Storyline":
    - /url: "#storyline"
    - heading "Storyline" [level=3]
  - 'button "Storyline: edit"': Edit
  - heading "Did you know" [level=3]
  - 'button "Did you know: edit"': Edit
  - link "See more":
    - /url: /title/tt1190634/trivia/?ref_=tt_dyk_trv
    - text: Trivia
  - text: Translucent is a new character created for the television show. In the graphic novel, the remaining member of The Seven was an "alien" character named Jack From Jupiter, an expy of DC's Martian Manhunter.
  - link "See more":
    - /url: /title/tt1190634/trivia/?ref_=tt_dyk_trv
  - link "See more":
    - /url: /title/tt1190634/quotes/?ref_=tt_dyk_qu
    - text: Quotes
  - list:
    - listitem:
      - text: "["
      - emphasis: repeated line
      - text: "]"
    - listitem:
      - link "Billy Butcher":
        - /url: /name/nm0881631/?ref_=tt_dyk_qu
      - text: ": Fucking diabolical!"
  - link "See more":
    - /url: /title/tt1190634/quotes/?ref_=tt_dyk_qu
  - link "See more":
    - /url: /title/tt1190634/movieconnections/?ref_=tt_dyk_cnn
    - text: Connections
  - text: Featured in
  - 'link "Rich and Jay Talk About: Rich and Jay Talk About The Boys"':
    - /url: /title/tt10795002/?ref_=tt_dyk_cnn
  - text: (2019)
  - link "See more":
    - /url: /title/tt1190634/movieconnections/?ref_=tt_dyk_cnn
  - link "See more":
    - /url: /title/tt1190634/soundtrack/?ref_=tt_dyk_snd
    - text: Soundtracks
  - text: Get Loud For Me Performed by
  - link "Gizzle":
    - /url: /name/nm10486393/?ref_=dyk_snd
  - link "See more":
    - /url: /title/tt1190634/soundtrack/?ref_=tt_dyk_snd
  - link "Top picks":
    - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
    - heading "Top picks" [level=3]
  - text: Sign in to rate and Watchlist for personalized recommendations
  - link "Sign in":
    - /url: /registration/signin?ref_=tt_tpks_signin
  - link "FAQ 18":
    - /url: /title/tt1190634/faq/?ref_=tt_faq_sm
    - heading "FAQ 18" [level=3]
  - link "How many seasons does The Boys have?":
    - /url: /title/tt1190634/faq/?ref_=tt_faq_1#number-of-seasons
  - text: Powered by Alexa
  - link "See the answer":
    - /url: /title/tt1190634/faq/?ref_=tt_faq_1#number-of-seasons
  - link "What's with that fly in a couple of scenes flying in front of people faces?it's clearly some kind of Easter egg or reference, can someone answer this?":
    - /url: /title/tt1190634/faq/?ref_=tt_faq_2#fq0097998
  - link "See the answer":
    - /url: /title/tt1190634/faq/?ref_=tt_faq_2#fq0097998
  - link "Will this be available on DVD in the future from amazon?":
    - /url: /title/tt1190634/faq/?ref_=tt_faq_3#fq0098234
  - link "See the answer":
    - /url: /title/tt1190634/faq/?ref_=tt_faq_3#fq0098234
  - heading "Details" [level=3]
  - 'button "Details: edit"': Edit
  - link "See more":
    - /url: /title/tt1190634/releaseinfo/?ref_=tt_dt_rdat
    - text: Release date
  - link "July 26, 2019 (United States)":
    - /url: /title/tt1190634/releaseinfo/?ref_=tt_dt_rdat
  - link "See more":
    - /url: /title/tt1190634/releaseinfo/?ref_=tt_dt_rdat
  - text: Country of origin
  - link "United States":
    - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
  - link "See more":
    - /url: /title/tt1190634/externalsites/?ref_=tt_dt_ext#official
    - text: Official sites
  - link "Official Facebook":
    - /url: https://www.facebook.com/TheBoysTV/
  - link "Official Instagram":
    - /url: https://www.instagram.com/theboystv
  - link "See more":
    - /url: /title/tt1190634/externalsites/?ref_=tt_dt_ext#official
  - text: Language
  - link "English":
    - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
  - link "See more":
    - /url: /title/tt1190634/releaseinfo/?ref_=tt_dt_aka#akas
    - text: Also known as
  - text: Siêu Anh Hùng Phá Hoại
  - link "See more":
    - /url: /title/tt1190634/releaseinfo/?ref_=tt_dt_aka#akas
  - link "See more":
    - /url: /title/tt1190634/locations/?ref_=tt_dt_loc
    - text: Filming locations
  - link "Hamilton, Ontario, Canada":
    - /url: /search/title/?locations=Hamilton%40%40%40%20Ontario%40%40%40%20Canada&ref_=tt_dt_loc
  - text: (location)
  - link "See more":
    - /url: /title/tt1190634/locations/?ref_=tt_dt_loc
  - link "See more":
    - /url: /title/tt1190634/companycredits/?ref_=tt_dt_cmpy
    - text: Production companies
  - link "Amazon Studios":
    - /url: /company/co0319272/?ref_=tt_dt_cmpy_1
  - link "Kickstart Entertainment":
    - /url: /company/co0244439/?ref_=tt_dt_cmpy_2
  - link "Kripke Enterprises":
    - /url: /company/co0157257/?ref_=tt_dt_cmpy_3
  - link "See more":
    - /url: /title/tt1190634/companycredits/?ref_=tt_dt_cmpy
  - link "See more":
    - /url: https://pro.imdb.com/title/tt1190634/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
    - text: See more company credits at IMDbPro
  - link "See more":
    - /url: https://pro.imdb.com/title/tt1190634/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
  - link "Tech specs":
    - /url: /title/tt1190634/technical/?ref_=tt_spec_sm
    - heading "Tech specs" [level=3]
  - 'button "Tech specs: edit"': Edit
  - text: Runtime 1h(60 min) Color
  - link "Color":
    - /url: /search/title/?colors=color&ref_=tt_spec_att
  - text: Sound mix
  - link "Dolby Digital":
    - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
  - link "Dolby Atmos":
    - /url: /search/title/?sound_mixes=dolby_atmos&ref_=tt_spec_att
  - text: "Aspect ratio 2.39 : 1"
  - link "Contribute to this page":
    - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt1190634%2F
    - heading "Contribute to this page" [level=3]
  - text: Suggest an edit or add missing content
  - link "Go to Learn more about contributing":
    - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
    - text: Learn more about contributing
  - link "Go to Learn more about contributing":
    - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
  - link "Edit page":
    - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt1190634%2F
  - link "Add episode":
    - /url: https://contribute.imdb.com/updates?ref_=tt_cn_ep&update=episode&parent=tt1190634
  - complementary "Sponsored Content":
    - iframe
    - button "Get information, provide feedback or report sponsored ad": SPONSORED
  - heading "More to explore" [level=3]
  - group:
    - group:
      - img "Production art"
      - link "List":
        - /url: /most-anticipated/this-month/?ref_=tt_sw_csegmatm_elp_i
    - link "What to Watch in June":
      - /url: /most-anticipated/this-month/?ref_=tt_sw_csegmatm_elp_t
    - link "Add to your Watchlist":
      - /url: /most-anticipated/this-month/?ref_=tt_c_sw_csegmatm_elp_cta
- heading "Recently viewed" [level=3]
- text: You have no recently viewed pages
- contentinfo:
  - link "Sign in for more access":
    - /url: /registration/signin/?u=%2Ftitle%2Ftt1190634%2F&ref_=tt_ftr_reg
  - text: Follow IMDb on social
  - link "TikTok":
    - /url: https://www.tiktok.com/@imdb
  - link "Instagram":
    - /url: https://instagram.com/imdb
  - link "Twitter":
    - /url: https://twitter.com/imdb
  - link "YouTube":
    - /url: https://youtube.com/imdb/
  - link "Facebook":
    - /url: https://facebook.com/imdb
  - text: Get the IMDb app For Android and iOS
  - group:
    - img "Get the IMDb app"
    - link "For Android and iOS":
      - /url: https://slyb.app.link/Aa96cLcBeAb
  - link "Help":
    - /url: https://help.imdb.com/imdb
  - link "Site Index":
    - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
  - link "IMDbPro":
    - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
  - link "Box Office Mojo":
    - /url: https://www.boxofficemojo.com
  - link "License IMDb Data":
    - /url: https://developer.imdb.com/
  - link "Press Room":
    - /url: /pressroom/?ref_=tt_ftr
  - link "Advertising":
    - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
  - link "Jobs":
    - /url: https://www.amazon.jobs/en/teams/imdb
  - link "Conditions of Use":
    - /url: /conditions/?ref_=tt_ftr
  - link "Privacy Policy":
    - /url: /privacy/?ref_=tt_ftr
  - link "Your Ads Privacy Choices":
    - /url: /privacy/redirect/?ref_=tt_ftr
    - img
  - link "Your Ads Privacy Choices":
    - /url: /privacy/redirect/?ref_=tt_ftr
  - img "IMDb, an Amazon company"
  - paragraph: © 1990-2026 by IMDb.com, Inc.
- button "Back to top"
- img
- status
- img
- alert
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('complete flow from homepage to show detail with all assertions', async ({ page }) => {
  4   | 
  5   |     await page.goto('https://www.imdb.com');
  6   | 
  7   |     const pageTitle = page;
  8   |     await expect(pageTitle).toHaveTitle(/IMDb/);
  9   | 
  10  |     const logo = page.locator('a[aria-label="Home"]').first();
  11  |     await expect(logo).toBeVisible();
  12  | 
  13  |     const searchInput = page.locator('input[data-testid="suggestion-search"]');
  14  |     await expect(searchInput).toBeVisible();
  15  |     await expect(searchInput).toBeEnabled();
  16  |     await expect(searchInput).toHaveAttribute('placeholder', 'Search IMDb');
  17  |     await expect(searchInput).toHaveAttribute('name', 'q');
  18  | 
  19  |     await searchInput.click();
  20  | 
  21  |     const suggestionContainer = page.locator('#suggestion-search-container');
  22  |     await expect(suggestionContainer).toBeVisible();
  23  | 
  24  |     const popularSearches = page.locator('text=POPULAR SEARCHES');
  25  |     await expect(popularSearches).toBeVisible();
  26  | 
  27  |     const suggestions = page.locator('.react-autosuggest__suggestion').first();
  28  |     await suggestions.waitFor();
  29  |     await expect(suggestions).toBeVisible();
  30  | 
  31  |     await searchInput.fill('The Boys');
  32  |     await expect(searchInput).toHaveValue('The Boys');
  33  | 
  34  |     await page.keyboard.press('Enter');
  35  |     await expect(page).toHaveURL(/find/);
  36  | 
  37  |     const firstResult = page.locator('.ipc-metadata-list-summary-item').first();
  38  |     await firstResult.waitFor();
  39  |     await expect(firstResult).toBeVisible();
  40  | 
  41  |     const theBoysLink = page.locator('.ipc-metadata-list-summary-item').filter({ hasText: 'The Boys' }).first().locator('a[href*="/title/tt"]').first();
  42  |     await expect(theBoysLink).toBeVisible();
  43  |     await theBoysLink.click();
  44  | 
  45  |     await expect(page).toHaveURL(/title\/tt/, { timeout: 15000 });
  46  | 
  47  |     const title = page.locator('h1[data-testid="hero__pageTitle"]');
  48  |     await expect(title).toBeVisible();
  49  |     await expect(title).toHaveText('The Boys');
  50  | 
  51  |     const yearLabel = page.locator('[data-testid="title-details-releasedate"]');
  52  |     await expect(yearLabel).toBeVisible();
  53  | 
  54  |     const rating = page.locator('[data-testid="hero-rating-bar__aggregate-rating__score"]').first();
  55  |     await expect(rating).toBeVisible();
  56  | 
  57  |     const ratingCount = page.locator('[data-testid="hero-rating-bar__aggregate-rating__score"] ~ div').first();
> 58  |     await expect(ratingCount).toBeVisible();
      |                               ^ Error: expect(locator).toBeVisible() failed
  59  | 
  60  |     const firstChip = page.locator('a.ipc-chip').first();
  61  |     await firstChip.waitFor();
  62  |     await expect(firstChip).toBeVisible();
  63  | 
  64  |     const actionChip = page.locator('a.ipc-chip').filter({ hasText: 'Action' }).first();
  65  |     await expect(actionChip).toBeVisible();
  66  | 
  67  |     const comedyChip = page.locator('a.ipc-chip').filter({ hasText: 'Comedy' }).first();
  68  |     await expect(comedyChip).toBeVisible();
  69  | 
  70  |     const plot = page.locator('[data-testid="plot"]');
  71  |     await expect(plot).toBeVisible();
  72  | 
  73  |     const creatorSection = page.locator('[data-testid="title-pc-principal-credit"]').first();
  74  |     await expect(creatorSection).toBeVisible();
  75  | 
  76  |     const karlUrban = page.locator('a[href*="name"]').filter({ hasText: 'Karl Urban' }).first();
  77  |     await expect(karlUrban).toBeVisible();
  78  | 
  79  |     const jackQuaid = page.locator('a[href*="name"]').filter({ hasText: 'Jack Quaid' }).first();
  80  |     await expect(jackQuaid).toBeVisible();
  81  | 
  82  |     const antonyStarr = page.locator('a[href*="name"]').filter({ hasText: 'Antony Starr' }).first();
  83  |     await expect(antonyStarr).toBeVisible();
  84  | 
  85  |     const primeVideo = page.locator('a[aria-label*="Prime Video"], img[alt*="Prime Video"]').first();
  86  |     await expect(primeVideo).toBeVisible();
  87  | 
  88  |     const watchlistButton = page.locator('button').filter({ hasText: /Add to Watchlist/i }).first();
  89  |     await expect(watchlistButton).toBeVisible();
  90  | 
  91  |     const markAsWatched = page.locator('text=Mark as watched');
  92  |     await expect(markAsWatched).toBeVisible();
  93  | 
  94  |     const videos = page.locator('text=99+ VIDEOS');
  95  |     await expect(videos).toBeVisible();
  96  | 
  97  |     const photos = page.locator('text=99+ PHOTOS');
  98  |     await expect(photos).toBeVisible();
  99  | 
  100 |     const moreLikeThis = page.locator('[data-testid="shoveler"]').first();
  101 |     await expect(moreLikeThis).toBeVisible();
  102 | 
  103 |     const userReviews = page.locator('[data-testid="reviews-header"]');
  104 |     await expect(userReviews).toBeVisible();
  105 | 
  106 |     const castSection = page.locator('[data-testid="title-cast"]');
  107 |     await expect(castSection).toBeVisible();
  108 | 
  109 |     const castMembers = page.locator('[data-testid="title-cast-item"]');
  110 |     await castMembers.first().waitFor();
  111 |     await expect(castMembers.first()).toBeVisible();
  112 | 
  113 |     const topCastHeading = page.locator('[data-testid="title-cast"] h3');
  114 |     await expect(topCastHeading).toBeVisible();
  115 | 
  116 |     const episodeGuide = page.locator('[data-testid="episodes-header"]');
  117 |     await expect(episodeGuide).toBeVisible();
  118 | 
  119 |     const detailsSection = page.locator('[data-testid="title-details-section"]');
  120 |     await expect(detailsSection).toBeVisible();
  121 | 
  122 |     const contentRating = page.locator('[data-testid="title-details-contentrating"]');
  123 |     await expect(contentRating).toBeVisible();
  124 | 
  125 |     const countryOfOrigin = page.locator('[data-testid="title-details-origin"]');
  126 |     await expect(countryOfOrigin).toBeVisible();
  127 | 
  128 |     const language = page.locator('[data-testid="title-details-languages"]');
  129 |     await expect(language).toBeVisible();
  130 | 
  131 | });
```