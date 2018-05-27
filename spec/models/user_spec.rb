require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validates' do
    let(:user) { build_stubbed(:user, option) }
    let(:option) { {} }

    subject { user.valid? }

    describe 'first_name' do
      context 'Normal' do
        it { is_expected.to eq(true) }
      end
      context 'Abnormal' do
        let(:option) { { first_name: nil } }
        it { is_expected.to eq(false) }
      end
    end
    describe 'last_name' do
      context 'Normal' do
        it { is_expected.to eq(true) }
      end
      context 'Abnormal' do
        let(:option) { { last_name: nil } }
        it { is_expected.to eq(false) }
      end
    end
    describe 'email' do
      context 'Normal' do
        it { is_expected.to eq(true) }
      end
      context 'Abnormal' do
        context 'email is blank' do
          let(:option) { { email: nil } }
          it { is_expected.to eq(false) }
        end
        context 'invalid email' do
          let(:option) { { email: 'worng email' } }
          it { is_expected.to eq(false) }
        end
      end
    end
    describe 'gender' do
      context 'Normal' do
        it { is_expected.to eq(true) }
      end
      context 'Abnormal' do
        context 'gender is blank' do
          let(:option) { { gender: nil } }
          it { is_expected.to eq(false) }
        end
        context 'invalid string' do
          subject { proc { user } }
          let(:option) { { gender: 'Invalid String' } }
          it { is_expected.to raise_error(ArgumentError) }
        end
      end
    end
  end
  describe '#name' do
    let(:user) { build_stubbed(:user) }

    subject { proc { user.name } }

    context 'Normal' do
      it { is_expected.not_to raise_error }
    end
  end
end
