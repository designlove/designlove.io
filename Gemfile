source 'https://rubygems.org'
ruby '2.1.0'

gem 'rails', '4.1.0'
gem 'devise'

group :assets do
  gem 'sass-rails', '~> 4.0.0'
  gem 'uglifier', '>= 1.3.0'
  gem 'jquery-rails'
  gem 'jquery-ui-rails'
  gem 'bootstrap-sass'
  gem 'font-awesome-sass'
end

group :development do
  gem 'binding_of_caller'
  gem 'better_errors'
end

group :test do
  gem 'minitest-rails'
end

group :development, :test do
  gem 'sqlite3'
  gem 'byebug', :platform => 'mri'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end