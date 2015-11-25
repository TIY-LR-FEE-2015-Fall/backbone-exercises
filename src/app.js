import AppRouter from './router';

export default function() {
  var router = new AppRouter();

  Backbone.history.start();
}
