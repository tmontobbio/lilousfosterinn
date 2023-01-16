class FosterSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :current, :wishlist, :bio, :cover_photo
end
