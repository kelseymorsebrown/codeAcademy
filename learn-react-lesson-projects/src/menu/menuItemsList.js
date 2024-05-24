import { default as VideoPlayerApp } from '../video-player-patterns/App';
import { default as AnimalFunFactsApp } from '../animal-fun-facts/App';
import { default as AuthorizationFormApp } from '../authorization-form-state-hook/App';
import { default as WeatherPlannerApp } from '../weather-planner-effect-hook/App';
import { default as CodeyOverflowForumApp } from '../CodeyOverflowForum/App';
import { default as CuteGuineaPigsApp } from '../cute-guinea-pigs-patterns/App';
import { default as GroceryCartApp } from '../GroceryCart-state-hook/App';
import { default as PassingThoughtsApp } from '../passing-thoughts-effect-hook/App';
import { default as ProfileFormApp } from '../ProfileForm-state-hook/App';
import { default as QuizNavBarApp } from '../QuizNavBar-state-hook/App';
import { default as SocialNetworkApp } from '../social-network-effect-hook/App';
import { default as TimerApp } from '../timer-effect-hook/App';
import { default as HighScoresApp } from '../high-score-styles/App';

const menuItemsList = [
  {
    name: 'Animal Fun Facts',
    route: '/animalFunFacts',
    component: <AnimalFunFactsApp />,
  },
  {
    name: 'Codey Overflow Forum',
    route: '/codeyOverflowForum',
    component: <CodeyOverflowForumApp />,
  },

  // state hooks practice
  {
    name: 'Authorization Form',
    route: '/authorizationForm',
    component: <AuthorizationFormApp />,
  },
  {
    name: 'Grocery Cart',
    route: '/groceryCart',
    component: <GroceryCartApp />,
  },
  {
    name: 'Profile Form',
    route: '/profileForm',
    component: <ProfileFormApp />,
  },
  {
    name: 'Quiz Nav Bar',
    route: '/quizNavBar',
    component: <QuizNavBarApp />,
  },

  // effect hook practice
  {
    name: 'Passing Thoughts',
    route: '/passingThoughts',
    component: <PassingThoughtsApp />,
  },
  {
    name: 'Social Network',
    route: '/socialNetwork',
    component: <SocialNetworkApp />,
  },
  {
    name: 'Weather Planner',
    route: '/weatherPlanner',
    component: <WeatherPlannerApp />,
  },
  {
    name: 'Timer',
    route: '/timer',
    component: <TimerApp />,
  },

  // patterns practice
  {
    name: 'Video Player',
    route: '/videoPlayer',
    component: <VideoPlayerApp />,
  },

  {
    name: 'Cute Guinea Pigs',
    route: '/cuteGuineaPigs',
    component: <CuteGuineaPigsApp />,
  },

  // Styles practice
  {
    name: 'High Score',
    route: '/highScores',
    component: <HighScoresApp />,
  },
];

export default menuItemsList;
