import { useState } from "react";
import { Items, ReactSetState } from "../types/utils";
import Button from "./Button";

type ItemListProps = {
    items: Items[];
    setItems: ReactSetState<Items[]>;
};

const ItemList = ({ items, setItems }: ItemListProps) => {
    const [editId, setEditId] = useState<string | null>(null);
    const [editText, setEditText] = useState<string>("");
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());


    const handleDelete = (id: string) => {
        setItems(prev => prev.filter((data) => data.id !== id));
    };

    const handleEdit = (id: string, title: string) => {
        setEditId(id);
        setEditText(title);
    };

    const handleSave = (id: string) => {
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, title: editText } : item
        ));
        setEditId(null);
        setEditText("");
    };

    const handleCheckboxChange = (id: string) => {
        setCheckedItems(prev => {
            const newCheckedItems = new Set(prev);
            if (newCheckedItems.has(id)) {
                newCheckedItems.delete(id);
                
            } else {
                newCheckedItems.add(id);
            }
            return newCheckedItems;
        });
    };

    return (
        <>
            {items.map(data => (
                <div
                    key={data.id}
                    className="flex justify-between items-center border rounded-slate-600 pl-2 mb-2 py-2"
                >
                    <input
                        type="checkbox"
                        checked={checkedItems.has(data.id)}
                        onChange={() => handleCheckboxChange(data.id)}
                        className="mr-2"
                    />
                    {editId === data.id ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="flex-1 border border-slate-400 rounded pl-2"
                        />
                    ) : (
                        <p
                            className={`flex-1 ${checkedItems.has(data.id) ? 'line-through' : ''}`}
                        >
                            {data.title}
                        </p>
                    )}

                    <div className="flex space-x-2">
                        <Button onClick={() => handleDelete(data.id)}>
                            <>
                                <img
                                    width={24}
                                    height={24}
                                    className="pr-2"
                                    src="94fe9f2bc1c059f27df2bbb19bb708e9-removebg-preview.png"
                                    alt="Delete"
                                />
                            </>
                        </Button>

                        {editId === data.id ? (
                            <Button onClick={() => handleSave(data.id)}>
                                <>
                                    <img
                                        width={24}
                                        height={24}
                                        className="pr-2"
                                        src="pngtree-correct-icon-design-template-vector-png-image_3161542-removebg-preview.png"
                                        alt="Save"
                                    />
                                </>
                            </Button>
                        ) : (
                            <Button onClick={() => handleEdit(data.id, data.title)}>
                                <>
                                    <img
                                        width={24}
                                        height={24}
                                        className="pr-2"
                                        src="download-removebg-preview (1).png"
                                        alt="Edit"
                                    />
                                </>
                            </Button>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ItemList;
