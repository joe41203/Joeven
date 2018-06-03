namespace :elasticsearch do
  desc 'Elasticsearch create index'
  task :create_index => :environment do
    Cosmetic.__elasticsearch__.create_index!
  end

  desc 'Import Cosmetic to Elasticsearch'
  task :import_cosmetic => :environment do
    Cosmetic.import
  end
end
