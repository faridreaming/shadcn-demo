import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function ProfileCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center">
        <Avatar size="lg">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/97384053?v=4"
            alt="User avatar"
          />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold mt-4">Muhammad Sumbul</h1>
        <p className="text-sm text-muted-foreground">Frontend Engineer</p>
        <div className="flex items-center mt-4 gap-2">
          <Button>Follow</Button>
          <Button variant="outline">Profile</Button>
        </div>
      </CardContent>
    </Card>
  )
}
