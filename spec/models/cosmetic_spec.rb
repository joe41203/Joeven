require 'rails_helper'

RSpec.describe Cosmetic, type: :model do
  describe 'validate' do
    subject { build_stubbed(:cosmetic) }

    it { is_expected.to be_valid }
  end
end
