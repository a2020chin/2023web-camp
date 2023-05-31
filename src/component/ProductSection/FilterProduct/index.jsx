import DropdownMune from "./DropdownMune";
import AitypelSelectMune from "./AitypelSelectMune";
import DropdownSort from "./DropdownSort";
import Search from "./Search";

const aimodelSelect = [
  { id: "aimodelall", value: "", label: "所有模型", name: "aimodel" },
  { id: "aimodel1", value: "卡卡", label: "卡卡", name: "aimodel" },
  { id: "aimodel2", value: "杰杰", label: "杰杰", name: "aimodel" },
  { id: "aimodel3", value: "琪琪", label: "琪琪", name: "aimodel" },
  { id: "aimodel4", value: "昊昊", label: "昊昊", name: "aimodel" },
];

const aitypeSelect = [
  { id: "aitypeall", value: "", label: "全部", name: "aitype" },
  { id: "aitype1", value: "問答服務", label: "問答服務", name: "aitype" },
  { id: "aitype2", value: "虛擬客服", label: "虛擬客服", name: "aitype" },
  { id: "aitype3", value: "生活應用", label: "生活應用", name: "aitype" },
  { id: "aitype4", value: "程式知識", label: "程式知識", name: "aitype" },
  { id: "aitype5", value: "翻譯助手", label: "翻譯助手", name: "aitype" },
  { id: "aitype6", value: "行銷文案", label: "行銷文案", name: "aitype" },
];

const FilterProduct = () => {
  return (
    <>
      <Search />
      <div className="flex justify-between flex-wrap items-center gap-y-4 mb-12 lg:mb-10">
        <DropdownMune
          aimodelSelect={aimodelSelect}
          aitypeSelect={aitypeSelect}
        />
        <AitypelSelectMune
          className="order-3 lg:order-none"
          aitypeSelect={aitypeSelect}
        />
        <DropdownSort />
      </div>
    </>
  );
};

export default FilterProduct;
