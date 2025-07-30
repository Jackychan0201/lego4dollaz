import { Label } from "@/components/ui/label";

export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-full gap-3">
            <span className="inline-block w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            <Label className="text-base text-gray-700 font-medium">Loading...</Label>
        </div>
    )
}