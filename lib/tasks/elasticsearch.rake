namespace :elasticsearch do
  desc 'Elasticsearch create index'
  task create_index: :environment do
    Cosmetic.__elasticsearch__.create_index!
  end

  desc 'Import indexes'
  task import: :environment do
    Cosmetic.import
  end
end
