import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react"

export function InputField() {
    return (
        <div className="flex items-center gap-2">
            <Input placeholder="Procure por uma Barbearia..." />
            <Button variant="default">
                <SearchIcon size={20} />
            </Button>
        </div>
    )
}