
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
 
  return (
    <div className="p-4">
    <div className="flex flex-col gap-y-5">
      <div>
        <Button variant={"elevated"}>Click me</Button>
      </div>
      <div>
        <Input placeholder="Type here" />
      </div>
     
      <div>
        <Textarea placeholder="Soy un textarea"/>
      </div>
      <div>
        <Progress value={50}/>
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
    </div>
  )

}
