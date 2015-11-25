import Router from './router';

export default function() {
  new Router();

  Backbone.history.start();
}
