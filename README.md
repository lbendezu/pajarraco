# Pajarraco

Probando Ember.js and Rails

* Ember: >= 0.9.4
* Rails: >= 3.2

Ok, respira ...

Crea la aplicación Rails:

   rails new pajarraco
   cd pajarraco

Crear el scaffold Tweet:

   rails g scaffold Tweet title user content:text
   rake db:migrate

Agreguemos las siguientes gemas a nuestro `Gemfile`:

   gem 'ember-rails'
   gem 'inherited_resources'

Ejecutamos:

   bundle install
