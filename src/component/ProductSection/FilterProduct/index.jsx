import DropdownMune from "./DropdownMune";
import AitypelSelectMune from "./AitypelSelectMune";
import DropdownSort from "./DropdownSort";

const aimodelSelect = [
  { id: "aimodelall", value: "", label: "所有模型", name: "aimodel" },
  { id: "aimodel1", value: "卡卡", label: "卡卡", name: "aimodel" },
  { id: "aimodel2", value: "杰杰", label: "杰杰", name: "aimodel" },
  { id: "aimodel3", value: "琪琪", label: "琪琪", name: "aimodel" },
  { id: "aimodel4", value: "昊昊", label: "昊昊", name: "aimodel" },
];

const aitypeSelect = [
  { id: "aitypeall", value: "", label: "全部", name: "aitype" },
  { id: "aitype1", value: "聊天", label: "聊天", name: "aitype" },
  { id: "aitype2", value: "影像辨識", label: "影像辨識", name: "aitype" },
  { id: "aitype3", value: "翻譯", label: "翻譯", name: "aitype" },
  { id: "aitype4", value: "行銷", label: "行銷", name: "aitype" },
  { id: "aitype5", value: "客服", label: "客服", name: "aitype" },
  { id: "aitype6", value: "生產力", label: "生產力", name: "aitype" },
];

const FilterProduct = () => {
  return (
    <div className="flex justify-between items-center mb-10">
      <DropdownMune aimodelSelect={aimodelSelect} aitypeSelect={aitypeSelect} />
      <AitypelSelectMune aitypeSelect={aitypeSelect} />
      <DropdownSort />
    </div>
  );
};

export default FilterProduct;
