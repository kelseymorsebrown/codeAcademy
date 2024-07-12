import { default as VideoPlayerApp } from '../lessons/video-player-patterns/App';
import { default as AnimalFunFactsApp } from '../lessons/animal-fun-facts/App';
import { default as AuthorizationFormApp } from '../lessons/authorization-form-state-hook/App';
import { default as WeatherPlannerApp } from '../lessons/weather-planner-effect-hook/App';
import { default as CodeyOverflowForumApp } from '../lessons/CodeyOverflowForum/App';
import { default as CuteGuineaPigsApp } from '../lessons/cute-guinea-pigs-patterns/App';
import { default as GroceryCartApp } from '../lessons/GroceryCart-state-hook/App';
import { default as PassingThoughtsApp } from '../lessons/passing-thoughts-effect-hook/App';
import { default as ProfileFormApp } from '../lessons/ProfileForm-state-hook/App';
import { default as QuizNavBarApp } from '../lessons/QuizNavBar-state-hook/App';
import { default as SocialNetworkApp } from '../lessons/social-network-effect-hook/App';
import { default as TimerApp } from '../lessons/timer-effect-hook/App';
import { default as HighScoresApp } from '../lessons/high-score-styles/App';
import { default as SchoolAdminFormApp } from '../lessons/school-admin-form/App';
import { default as FoodOrderFormApp } from '../lessons/food-order-form/App';
import { default as CheckoutFormApp } from '../lessons/checkout-form-testing/App';
import { CopyCatContainer as CopyCatApp } from '../lessons/copy-cat-tom-testing/containers/CopyCatContainer';

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

  // Forms Practice
  {
    name: 'School Admin Form',
    route: '/schoolAdminForm',
    component: <SchoolAdminFormApp />,
  },
  {
    name: 'Food Order Form',
    route: '/foodOrderForm',
    component: <FoodOrderFormApp />,
  },

  // test practice
  {
    name: 'Checkout Form',
    route: '/checkoutForm',
    component: <CheckoutFormApp />,
  },
  {
    name: 'Copy Cat',
    route: '/copyCat',
    component: <CopyCatApp />,
  },
];

export default menuItemsList;
