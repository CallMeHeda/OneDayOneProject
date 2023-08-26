import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild('popup', { static: false }) popup: any;

  public friendsId: string = '';
  public messageText: string = '';
  public messageArray: { user: string; message: string }[] = [];
  private storageArray: any = [];

  public login: string = '';
  public currentUser: any;
  public selectedUser: any;

  public showScreen = false;

  public userList = [
    {
      id: 1,
      name: 'Reaper',
      login: 'RE4P3R-666',
      image: 'assets/avatars/reaper.png',
      friendsId: {
        2: 'OrisaToReaper',
        4: 'JunkerToReaper',
      },
    },
    {
      id: 2,
      name: 'Orisa',
      login: 'OR15A',
      image: 'assets/avatars/orisa.png',
      friendsId: {
        1: 'OrisaToReaper',
        3: 'OrisaToAshe',
      },
    },
    {
      id: 3,
      name: 'Ashe',
      login: 'DYNAM1T3_DAME',
      image: 'assets/avatars/ashe.png',
      friendsId: {
        2: 'OrisaToAshe',
        4: 'AsheToJunker',
      },
    },
    {
      id: 4,
      name: 'Junker Queen',
      login: 'THR0NE_0F_JUNK',
      image: 'assets/avatars/junkerQueen.png',
      friendsId: {
        1: 'JunkerToReaper',
        3: 'AsheToJunker',
      },
    },
  ];

  constructor(
    private chatService: ChatService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.chatService
      .getMessage()
      .subscribe(
        (data: { user: string; friendsId: string; message: string }) => {
          if (this.friendsId) {
            this.storageArray = this.chatService.getStorage();
            const storeIndex = this.storageArray.findIndex(
              (storage: any) => storage.friendsId === this.friendsId
            );
            this.messageArray = this.storageArray[storeIndex].messages;
          }
        }
      );
  }

  ngAfterViewInit(): void {
    this.openPopup(this.popup);
  }

  openPopup(content: any): void {
    this.modalService.open(content, { backdrop: 'static', centered: true });
  }

  connection(dismiss: any): void {
    this.currentUser = this.userList.find(
      (user) => user.login === this.login.toString()
    );

    if (this.currentUser) {
      const friendIds = Object.values(this.currentUser.friendsId);
      // console.log(friendIds)

      this.userList = this.userList.filter((user) => {
        const containsFriendsId = Object.values(user.friendsId).some((friend) =>
          friendIds.includes(friend)
        );
        return containsFriendsId && user.login !== this.login.toString();
      });

      // console.log(this.userList)
    }

    this.showScreen = true;
    dismiss();
  }

  join(username: string, friendsId: string): void {
    this.chatService.joinFriend({
      user: username,
      friendsId: friendsId,
    });
  }

  selectUserHandler(login: string): void {
    this.selectedUser = this.userList.find((user) => user.login === login);
    this.friendsId = this.selectedUser.friendsId[this.currentUser.id];
    console.log(
      'selected user ',
      this.selectedUser,
      ' friends id ',
      this.friendsId
    );
    this.messageArray = [];

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray.findIndex(
      (storage: any) => storage.friendsId === this.friendsId
    );

    if (storeIndex > -1) {
      this.messageArray = this.storageArray[storeIndex].messages;
    }

    console.log(this.messageArray);

    this.join(this.currentUser.name, this.friendsId);
  }

  sendMessage(): void {
    if (this.messageText.trim() === '') {
      return;
    }

    this.chatService.sendMessage({
      user: this.currentUser.name,
      friendsId: this.friendsId,
      message: this.messageText,
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray.findIndex(
      (storage: any) => storage.friendsId === this.friendsId
    );

    if (storeIndex > -1) {
      this.storageArray[storeIndex].messages.push({
        user: this.currentUser.name,
        message: this.messageText,
      });
    } else {
      const updateStorage = {
        friendsId: this.friendsId,
        messages: [
          {
            user: this.currentUser.name,
            message: this.messageText,
          },
        ],
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }
}
