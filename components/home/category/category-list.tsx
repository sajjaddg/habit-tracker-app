import { FC } from "react"
import { FlatList } from "react-native"
import CategoryItem, { CategoryItemProps } from "./category-item"

type CategoryListProps = {
  data: CategoryItemProps[]
  activeCategoryId: number
  onPressCategory: (id: number) => void
}
const CategoryList: FC<CategoryListProps> = ({ data, activeCategoryId, onPressCategory }) => {
  return (
    <FlatList
      renderItem={({ item }) => (
        <CategoryItem isActive={activeCategoryId === item.id} onPress={() => onPressCategory(item.id)} {...item} />
      )}
      contentContainerClassName="gap-2 flex-row px-4"
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}
export default CategoryList
