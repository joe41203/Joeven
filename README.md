# README

## SETUP
```
$ brew upgrade rbenv ruby-build
$ rbenv install 2.5.0
$ rbenv local 2.5.0
$ rbenv rehash
$ gem install bundler
$ bundle install --path vendor/bundle
$ yarn install
```

## SETUP ElasticSearch
```
$ brew install elasticsearch
```

## How to import indexes
```
$ bundle exec rake elasticsearch:create_index
$ bundle exec rake elasticsearch:import
```

## Start
```
$ bundle exec rails s
$ yarn dev
$ elasticsearch
```
